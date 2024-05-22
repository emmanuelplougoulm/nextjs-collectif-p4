import React from "react";

type ListProps = {
  children: React.ReactNode;
  className?: string;
};

const List: React.FC<ListProps> = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export default List;
