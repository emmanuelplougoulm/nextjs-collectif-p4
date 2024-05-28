import React from "react";

type ListProps = {
  tag: "ol" | "ul";
  children: React.ReactNode;
  className?: string;
};

const List: React.FC<ListProps> = ({ children, className, tag }) => {
  const Tag = tag;

  return <Tag className={className}>{children}</Tag>;
};

export default List;
