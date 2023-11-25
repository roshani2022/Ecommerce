import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import RootLayout from "./components/Layout/Root";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/Context/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout onShowCart={handleShow} />,

      children: [
        { path: "/store", element: <Store /> },
        { path: "/about", element: <About /> },
        { path: "/home", element: <Home /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      {showCart && <Cart onClose={handleClose} />}
    </CartProvider>
  );
}

export default App;
