import React from "react";

type ButtonPropsType = {
  className?: string;
  onClick: Function;
  children: React.ReactNode;
};

const Button: React.FC<ButtonPropsType> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button className={className} onClick={() => onClick}>
      {children}
    </button>
  );
};

export default Button;
