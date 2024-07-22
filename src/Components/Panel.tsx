import type { FC, PropsWithChildren } from 'react';

interface PanelProps extends PropsWithChildren {
  className?: string;
}

const Panel: FC<PanelProps> = ({ className, children }) => {
  return (
    <div
      className={`max-md:max-w-full mx-2 rounded-lg border-2 border-dusty-gray-100 border-opacity-5 bg-dusty-gray-100 bg-opacity-50 p-2 backdrop-blur-sm md:max-xl:w-2/3 xl:w-1/2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Panel;
