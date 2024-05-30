import React from "react";

type ButtonPropsType = {
  className?: string;
  onClick: (value: string) => void;
  value: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonPropsType> = ({
  className,
  onClick,
  children,
  value,
}) => {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {children}
    </button>
  );
};

export default Button;
