import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
