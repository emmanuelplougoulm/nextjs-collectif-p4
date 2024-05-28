import React from "react";

type ListItemProps = {
  key: string | number;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const List: React.FC<ListItemProps> = ({
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
