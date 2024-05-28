import React from "react";

type ContainerPropsType = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerPropsType> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Container;
