import React from "react";

type ListProps = {
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<ListProps> = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export default Title;
