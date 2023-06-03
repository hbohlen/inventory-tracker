import React from "react";

export interface ListItemProps {
  name: string;
  quantity: number;
}

const ListItem: React.FC<ListItemProps> = ({ name, quantity }) => {
  return (
    <div className="px-4 py-2 border-b flex flex-col items-center">
      <p className="text-lg font-semibold mb-2">{name}</p>
      <p className="text-gray-500">{`Quantity: ${quantity}`}</p>
    </div>
  );
};

export default ListItem;
