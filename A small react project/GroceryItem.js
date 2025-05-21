import React from 'react';

function GroceryItem(props){

  return (
      <button onClick={props.onClick}  >
       {props.name}
      </button>
    );
}

export default GroceryItem;


/*
Create a simple online grocery store with reusable React function components. Your store should provide users with at least four buttons for possible items they can purchase. Every time a user clicks on a button, it should alert that the thing they’ve clicked on has been added to the cart via an alert message.

Click on the folder icon next to the App.js file and create a GroceryItem.js file.
Define a GroceryItem function component.
The component should accept props and return a button that displays the grocery item’s name and contain an event handler for the onClick event.
The component should be used to render the four grocery items, passing in the appropriate props.
In App.js, return four instances of the GroceryItem component with names such as Eggs, Banana, Strawberry, or Bread. The items are up to you!

*/