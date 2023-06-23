import React, { useState } from 'react';

import Header from './components/Header';

import { itemData } from './data/itemData';

import { ItemList } from './components/ItemList/ItemList';

import { AddItemForm } from './components/AddItem/AddItemForm';

import './styles/global.css';


const App: React.FC = () => {
  const [items, setItems] = useState<Array<Item>>(itemData);
  
  return (
    <>
      <Header />

      <ItemList items={items} />

      <AddItemForm />
    </>
  );
};

export default App;
