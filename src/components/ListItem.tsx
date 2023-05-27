import React from "react";

interface ListItemProps {
  name: string;
  quantity: number;
}

const ListItem: React.FC<ListItemProps> = ({ name, quantity }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};

export default ListItem;
