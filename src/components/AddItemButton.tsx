import React, { useState } from "react";
import NewItemForm from "./NewItemForm";

const AddItemButton: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleAddItem = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4 z-10"
        onClick={handleAddItem}
      >
        Add New Item
      </button>

      {showForm && <NewItemForm onClose={handleCancel} />}
    </div>
  );
};

export default AddItemButton;
