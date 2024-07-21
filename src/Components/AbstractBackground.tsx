import React, { useRef, useEffect, type FC } from 'react';

interface AbstractBackgroundProps {
  nodeDefaultSize?: number;
  numParticles?: number;
  sizeChangeSpeed?: number;
  maxConnectionDistance?: number;
  debugLabels?: boolean;
  className?: string;
}
const AbstractBackground: FC<AbstractBackgroundProps> = ({
  nodeDefaultSize = 2,
  numParticles = 200,
  sizeChangeSpeed = 0.01,
  maxConnectionDistance = 150,
  debugLabels = false,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    let idCounter = 0;

    const mouse = {
      x: null,
      y: null,
    } as unknown as { x: number; y: number };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      init();
    });

    class Particle {
      id: number;
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      direction: number;
      velocity: number;
      growing: boolean;
      connections: number;
      constructor(x: number, y: number, id: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.size = 0;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.direction = Math.random() * 360;
        this.velocity = Math.random() * 0.5;
        this.growing = true;
        this.connections = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = '#242325';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let maxSize = this.connections;
        if (this.connections > 4) {
          maxSize = 4 + this.connections / 2;
        }
        if (this.connections < nodeDefaultSize) {
          maxSize = nodeDefaultSize;
        }

        const minSize = 2;
        // Grow if growing
        if (this.growing) {
          if (this.size >= minSize) {
            this.growing = false;
          }
          this.size += sizeChangeSpeed;
        }

        // Grow / shrink depending on connection count
        if (this.connections > 0 && !this.growing) {
          if (this.size <= maxSize) {
            this.size += sizeChangeSpeed * this.connections;
          }
          if (this.size > maxSize) {
            this.size -= sizeChangeSpeed * (this.size > 1 ? this.size : 1);
          }
        }
        // Shrink if no conns
        else if (this.connections === 0 && !this.growing) {
          if (this.size > 0) {
            if (this.size - 0.05 < 0) {
              this.size = 0;
            } else {
              this.size -= sizeChangeSpeed;
            }
          }
        }

        // Apply velocity
        const rads = this.direction * (Math.PI / 180);

        this.x += this.velocity * Math.cos(rads);
        this.y -= this.velocity * Math.sin(rads);

        // Update direction
        if (this.direction > 360) this.direction = 0;
        this.direction += this.velocity / 5;

        this.draw();
      }
    }

    function init() {
      if (!canvas) return;

      const cols = Math.sqrt(numParticles);
      const rows = Math.sqrt(numParticles);
      const horizontalSpacing = canvas.width / (cols + 1);
      const verticalSpacing = canvas.height / (rows + 1);

      particles = [];
      idCounter = 0;
      for (let i = 0; i <= cols + 1; i++) {
        for (let j = 0; j <= rows + 1; j++) {
          const x =
            i * horizontalSpacing +
            (Math.random() - 0.5) * horizontalSpacing * 0.5;
          const y =
            j * verticalSpacing + (Math.random() - 0.5) * verticalSpacing * 0.5;
          particles.push(new Particle(x, y, idCounter));
          idCounter += 1;
        }
      }
    }

    function connect() {
      if (!ctx || !canvas) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        const pa = particles[a];
        if (!pa) return;
        pa.connections = 0;
        for (let b = 0; b < particles.length; b++) {
          const pb = particles[b];
          if (!pb) return;
          if (pa.id === pb.id) continue; // skip this iteration
          //pb.connections = 0;

          const distance = Math.sqrt((pa.x - pb.x) ** 2 + (pa.y - pb.y) ** 2);
          if (distance < maxConnectionDistance) {
            pa.connections += 1;
            //pb.connections += 1;

            opacityValue = 1 - distance / maxConnectionDistance;
            ctx.strokeStyle = 'rgba(36,35,37,' + opacityValue + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
        }
        if (debugLabels) {
          pa.growing && ctx.fillText('NEW', pa.x + 5, pa.y - 20);
          ctx.fillText(
            `Size: ${(Math.round(pa.size * 100) / 100).toString()}`,
            pa.x + 5,
            pa.y - 10
          );
          ctx.fillText(
            `Connections: ${pa.connections.toString()}`,
            pa.x + 5,
            pa.y
          );
        }
      }
    }

    function bounce() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const pa = particles[a];
          const pb = particles[b];
          if (!pa || !pb) return;
          const distance =
            (pa.x - pb.x) * (pa.x - pb.x) + (pa.y - pb.y) * (pa.y - pb.y);
          if (distance < nodeDefaultSize) {
            const papd = pa.direction;
            pa.direction = pb.direction;
            pb.direction = papd;
          }
        }
      }
    }

    function regenerateNoConns() {
      particles.forEach((particle) => {
        if (!particle.growing && particle.size == 0) {
          particles.push(
            new Particle(particle.baseX, particle.baseY, idCounter)
          );
          idCounter++;
        }
      });
      particles = particles.filter((p) => p.growing || p.size > 0);
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
      });

      regenerateNoConns();
      connect();
      bounce();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener(
        'mousemove',
        mouse as unknown as EventListener
      );
      window.removeEventListener('resize', init);
    };
  }, [
    maxConnectionDistance,
    debugLabels,
    nodeDefaultSize,
    numParticles,
    sizeChangeSpeed,
  ]);

  return (
    <canvas
      className={`fixed left-0 top-0 -z-50 block h-full w-full ${className}`}
      ref={canvasRef}
    ></canvas>
  );
};

export default AbstractBackground;
