import React from "react";

import ListItem, { ListItemProps } from "./ListItem";

interface ItemListProps {
  items: ListItemProps[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} name={item.name} quantity={item.quantity} />
      ))}
    </div>
  );
};

export default ItemList;
