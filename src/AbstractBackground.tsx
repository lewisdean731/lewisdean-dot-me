import React, { useRef, useEffect, type FC } from 'react';

interface AbstractBackgroundProps {
  nodeSize?: number;
  numParticles?: number;
  connectDistanceReductionFactor?: number;
  bgClassName: string;
}
const AbstractBackground: FC<AbstractBackgroundProps> = ({
  nodeSize = 2,
  numParticles = 200,
  connectDistanceReductionFactor = 7,
  bgClassName,
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
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      direction: number;
      velocity: number;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = nodeSize;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.direction = Math.random() * 360;
        this.velocity = Math.random() * 2;
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
      for (let i = 0; i <= cols + 1; i++) {
        for (let j = 0; j <= rows + 1; j++) {
          const x =
            i * horizontalSpacing +
            (Math.random() - 0.5) * horizontalSpacing * 0.5;
          const y =
            j * verticalSpacing + (Math.random() - 0.5) * verticalSpacing * 0.5;
          particles.push(new Particle(x, y));
        }
      }
    }

    function connect() {
      if (!ctx || !canvas) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const pa = particles[a];
          const pb = particles[b];
          if (!pa || !pb) return;
          const distance =
            (pa.x - pb.x) * (pa.x - pb.x) + (pa.y - pb.y) * (pa.y - pb.y);
          if (
            distance <
            (canvas.width / connectDistanceReductionFactor) *
              (canvas.height / connectDistanceReductionFactor)
          ) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = 'rgba(36,35,37,' + opacityValue + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
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
          if (distance < nodeSize) {
            const papd = pa.direction;
            pa.direction = pb.direction;
            pb.direction = papd;
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
      });

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
  }, [connectDistanceReductionFactor, nodeSize, numParticles]);

  return (
    <canvas
      className={`w-full h-full overflow-hidden absolute top-0 left-0 -z-50 ${bgClassName}`}
      ref={canvasRef}
    ></canvas>
  );
};

export default AbstractBackground;
