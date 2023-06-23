import React from 'react';

interface ItemProps {
  name?: string;
  description?: string;
  quantity?: number;
}

export const Item: React.FC<ItemProps> = (props) => {
  return (
    <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src=""
        alt="Item Image"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <div className="text-lg text-black font-semibold">Item {props.name}</div>
          <div className="text-slate-500 font-medium">Quantity: {props.quantity}</div>
          <div className="text-slate-500 font-medium">Description: {props.description ? props.description : 'No Description'}</div>
        </div>
      </div>
    </div>
  );
};
