import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import RootLayout from "./components/Layout/Root";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/Context/CartProvider";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home"

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
        { path: "/contactUs", element: <ContactUs /> },
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
