import React from "react";

import Header from "./components/Header";
import ListItem from "./components/ListItem";

import "./styles/global.css";

const App: React.FC = () => {
  const listItemData = {
    name: "Item 1",
    quantity: 1,
  };

  return (
    <>
      <Header />
      <ListItem name={listItemData.name} quantity={listItemData.quantity} />
    </>
  );
};

export default App;
