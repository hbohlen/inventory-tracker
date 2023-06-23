import React, { useState } from 'react';

import Header from './components/Header';

import { Item } from './components/Item';

import { v4 as uuidv4 } from 'uuid';

import './styles/global.css';

const App: React.FC = () => {
  const showItems = true;

  const [items, setItems] = useState([
    {
      name: 'Item 1',
      description: 'This is item 1',
      quantity: 1,
    },
    {
      name: 'Item 2',
      description: 'This is item 2',
      quantity: 2,
    },
    {
      name: 'Item 3',
      description: 'This is item 3',
      quantity: 3,
    },
    {
      name: 'Item 4',
      description: 'This is item 4',
      quantity: 4,
    },
    {
      name: 'Item 5',
      description: 'This is item 5',
      quantity: 5,
    },
    {
      name: 'Item 6',
      description: 'This is item 6',
      quantity: 6,
    },
  ]);

  return (
    <>
      <Header />
      {showItems ? (
        <>
          <div className="flex flex-wrap justify-center">
            {items.map((item) => {
              return (
                <Item
                  key={uuidv4()}
                  name={item.name}
                  description={item.description}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>No Items</p>
      )}
    </>
  );
};

export default App;
