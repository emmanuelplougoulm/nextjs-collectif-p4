import React from "react";

type ListItemPropsType = {
  key: string | number;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const List: React.FC<ListItemPropsType> = ({
  children,
  className,
  key,
  onClick,
}) => {
  return (
    <li
      key={key}
      className={className}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </li>
  );
};

export default List;
