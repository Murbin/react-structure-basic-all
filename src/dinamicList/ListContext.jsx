// ListContext.js
import React, { createContext, useState, useContext } from 'react';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <ListContext.Provider value={{ items, newItem, setNewItem, addItem, removeItem }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
