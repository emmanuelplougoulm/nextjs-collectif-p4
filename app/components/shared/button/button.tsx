import React from "react";

type ButtonProps = {
  className?: string;
  onClick: any;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
