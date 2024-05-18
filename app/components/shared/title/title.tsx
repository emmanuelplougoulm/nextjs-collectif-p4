import React from "react";

type TitleProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ tag, children, className }) => {
  const Tag = tag;

  return <Tag className={className}>{children}</Tag>;
};

export default Title;
