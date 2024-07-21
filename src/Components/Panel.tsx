import type { FC, PropsWithChildren } from "react";

interface PanelProps extends PropsWithChildren {
  className?: string;
}

const Panel: FC<PanelProps> = ({ className, children }) => {
  return (
    <div
      className={`m-2 p-2 w-1/2 bg-slate-50 border-2 border-slate-50 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Panel;
