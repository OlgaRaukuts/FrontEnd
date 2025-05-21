import React from 'react';
import GroceryItem from './GroceryItem';

function App() {
  return (
    <>
    <GroceryItem name = 'Eggs' onClick={() => alert("Eggs added to cart!")}  />
    <GroceryItem name = 'Banana' onClick={() => alert("Banana added to cart!")}  />
    <GroceryItem name = 'Strawberry' onClick={() => alert("Strawberry added to cart!")}  />
    <GroceryItem name = 'Bread' onClick={() => alert("Bread added to cart!")}  />
    </>
  );
}

export default App