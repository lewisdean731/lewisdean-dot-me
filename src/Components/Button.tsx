import React from 'react';
import type { FC, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`m-1 rounded-lg bg-smalt-blue bg-opacity-80 px-4 py-2 text-white duration-200 ease-in-out hover:bg-smalt-blue-700 hover:bg-opacity-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
