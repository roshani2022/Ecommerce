import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const userEmail = "abc12gcom";
  let url ="https://crudcrud.com/api/d269d04285684a088019efe727cc6389"

  const addItemToCartHandler = async (item) => {
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;

      let userId = updatedItems[existingItemIndex]._id;

      try {
        await axios.put(
          `${url}/cart${userEmail}/${userId}`,
          {
            ...item,
            quantity: Number(updatedItems[existingItemIndex].quantity),
          }
        );

        setItems(updatedItems);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.post(
          `${url}/cart${userEmail}`,

          item
        );

        setItems((prevItems) => [...prevItems, response.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get(
          `${url}/cart${userEmail}`
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
    console.log(id);
    if (existingItemIndex !== -1) {
      const currentItem = items[existingItemIndex];
      const userId = currentItem._id;

      if (currentItem.quantity > 1) {
        // If the quantity is greater than 1, decrement it by 1
        const updatedItems = [...items];
        updatedItems[existingItemIndex].quantity -= 1;
        delete updatedItems[existingItemIndex]._id;
        const newItem = updatedItems[existingItemIndex];

        try {
          const response = await axios.put(
            `${url}/cart${userEmail}/${userId}`,
            {
              ...newItem,
            }
          );
          setItems(response.data);
        } catch (err) {
          console.error("Error updating quantity:", err);
         
        }
        setItems(updatedItems);
      } else {
        // If the quantity is 1, remove the item from the cart
        const updatedItems = items.filter((item) => item.id !== id);

        try {
          const response = await axios.delete(
            `${url}/cart${userEmail}/${userId}`
          );
          setItems(response.data);
        } catch (err) {
          console.error("Error removing item from cart:", err);
          // Handle error, e.g., show a message to the user
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
