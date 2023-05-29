import React from "react";

import Header from "./components/Header";

import ItemList from "./components/ItemList";

import { listData } from "./data/listData";

import "./styles/global.css";

const App: React.FC = () => {
  const listItemData = [
    { name: "Item 1", quantity: 1 },
    { name: "Item 2", quantity: 2 },
  ];

  return (
    <>
      <Header />
      <ItemList items={listData} />
    </>
  );
};

export default App;
