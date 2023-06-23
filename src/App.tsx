import React, { useState } from 'react';

import Header from './components/Header';

import { Item } from './components/Item';

import './styles/global.css';

const App: React.FC = () => {
  const showItems = true;

  return (
    <>
      <Header />
      {showItems ? (
        <>
          <div className="flex flex-wrap">
            <Item name={'Item 1'} quantity={5} />
            <Item name={'Item 2'} quantity={10} />
            <Item name={'Item 1'} quantity={5} />
            <Item name={'Item 2'} quantity={10} />
            <Item name={'Item 1'} quantity={5} />
            <Item name={'Item 2'} quantity={10} />
            <Item name={'Item 1'} quantity={5} />
            <Item name={'Item 2'} quantity={10} />
            <Item name={'Item 1'} quantity={5} />
            <Item name={'Item 2'} quantity={10} />
          </div>
        </>
      ) : (
        <p>No Items</p>
      )}
    </>
  );
};

export default App;
