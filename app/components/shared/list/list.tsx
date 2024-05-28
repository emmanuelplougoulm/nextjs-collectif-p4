import React from "react";

type ListPropsType = {
  tag: "ol" | "ul";
  children: React.ReactNode;
  className?: string;
};

const List: React.FC<ListPropsType> = ({ children, className, tag }) => {
  const Tag = tag;

  return <Tag className={className}>{children}</Tag>;
};

export default List;
