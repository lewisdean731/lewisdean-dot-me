import type { FC, PropsWithChildren } from 'react';

interface PanelProps extends PropsWithChildren {
  className?: string;
}

const Panel: FC<PanelProps> = ({ className, children }) => {
  return (
    <div
      className={`m-2 w-1/2 rounded-xl border-2 border-dusty-gray-100 border-opacity-5 bg-dusty-gray-100 bg-opacity-75 p-2 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Panel;
