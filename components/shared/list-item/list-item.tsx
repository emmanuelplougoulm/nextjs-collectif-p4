import React from "react";

type ListItemPropsType = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const List: React.FC<ListItemPropsType> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <li className={className} onClick={onClick ? () => onClick() : undefined}>
      {children}
    </li>
  );
};

export default List;
