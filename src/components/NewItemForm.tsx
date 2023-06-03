import React, { useState } from "react";

const NewItemForm: React.FC = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", name, quantity);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="quantity"
          className="block text-gray-700 font-bold mb-2"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItemForm;
