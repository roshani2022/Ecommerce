import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const userEmail = "abc12gcom";

  const addItemToCartHandler = async (item) => {
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;

      let userId = updatedItems[existingItemIndex]._id;

      try {
        const res = await axios.put(
          `https://crudcrud.com/api/8be34c0022ba4f5eac7de22e3b00f13c/cart${userEmail}/${userId}`,
          {
            ...item,
            quantity: Number(updatedItems[existingItemIndex].quantity),
          }
        );
        setItems(res.data);
        // Set the state after updating the item in the array
      } catch (err) {
        console.log(err);
      }
      // setItems(updatedItems);
    } else {
      // setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
      try {
        const response = await axios.post(
          `https://crudcrud.com/api/8be34c0022ba4f5eac7de22e3b00f13c/cart${userEmail}`,
          {
            ...item,quantity:1
          }
          
        );
        setItems([response.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/8be34c0022ba4f5eac7de22e3b00f13c/cart${userEmail}`
        );

        setItems(response.data);
      } catch (err) {
        console.log("Error fetching cart items:", err);
      }
    };
    getCartItems();
  }, [userEmail]);

  const removeItemFromCartHandler = async (id) => {
    const existingItemIndex = items.findIndex((cartItem) => cartItem.id === id);

    if (existingItemIndex !== -1) {
      // If the item exists in the cart, get its current quantity
      const currentItem = items[existingItemIndex];

      let userId = currentItem._id;

      console.log("userId", userId);

      // If the quantity is greater than 1, decrement it by 1
      if (currentItem.quantity > 1) {
        const updatedItems = [...items];

        updatedItems[existingItemIndex].quantity -= 1;
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));

        try {
          const response = await axios.put(
            `https://crudcrud.com/api/8be34c0022ba4f5eac7de22e3b00f13c/cart${userEmail}/${userId}`,
            {
              ...id,
              quantity: Number(updatedItems[existingItemIndex].quantity),
            }
          );
          setItems(response.data);
        } catch (err) {
          console.log(err);
        }
        setItems(updatedItems);
      } else {
        // If the quantity is 1, remove the item from the cart

        const updatedItems = items.filter((item) => item.id !== id);
        try {
          const response = await axios.delete(
            `https://crudcrud.com/api/8be34c0022ba4f5eac7de22e3b00f13c/cart${userEmail}/${userId}`
          );
          setItems(response.data);
        } catch (err) {
          console.log(err);
        }
        setItems(updatedItems);
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
