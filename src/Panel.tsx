import type { FC, PropsWithChildren } from 'react';

interface PanelProps extends PropsWithChildren {
  className: string;
}

const Panel: FC<PanelProps> = ({ className, children }) => {
  return <div className={`m-2 p-2 w-fit bg-slate-50 border-2 rounded-md ${className}`}>{children}</div>;
};

export default Panel;
