import React from "react";

import Header from "./components/Header";

import ItemList from "./components/ItemList";

import { listData } from "./data/listData";

import "./styles/global.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ItemList items={listData} />
    </>
  );
};

export default App;
