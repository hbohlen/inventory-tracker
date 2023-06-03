import React from "react";

import Header from "./components/Header";

import ItemList from "./components/ItemList";

import AddItemButton from "./components/AddItemButton";

import { listData } from "./data/listData";

import "./styles/global.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ItemList items={listData} />
      <AddItemButton />
    </>
  );
};

export default App;
