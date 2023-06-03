import React from "react";

const AddItemButton: React.FC = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4 z-10"
      style={{ zIndex: 10 }}
    >
      Add New Item
    </button>
  );
};

export default AddItemButton;
