import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {

 const existingItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

if (existingItemIndex !== -1) {
  // If the item already exists, update its quantity
  const updatedItems = [...items];
  console.log(updatedItems[existingItemIndex])
  updatedItems[existingItemIndex].quantity += 1;
  setItems(updatedItems);
} else {
  // If the item doesn't exist, add it as a new item
  setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
}

  };


const removeItemFromCartHandler = (id) => {
  // Find the index of the item with the given ID in the cart
  const existingItemIndex = items.findIndex((cartItem) => cartItem.id === id);

  if (existingItemIndex !== -1) {
    // If the item exists in the cart, get its current quantity
    const currentItem = items[existingItemIndex];
    console.log(currentItem)

    // If the quantity is greater than 1, decrement it by 1
    if (currentItem.quantity > 1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity -= 1;
      setItems(updatedItems);
    } else {
      // If the quantity is 1, remove the item from the cart
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  }
};
 

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

 
