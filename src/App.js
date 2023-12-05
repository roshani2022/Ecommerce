import React, { useState, useContext } from "react";

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import RootLayout from "./components/Layout/Root";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/Context/CartProvider";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Store/ProductDetail";
import Login from "./components/Login/Login";
import LoginContext from "./components/Context/LoginContext";

function App() {
  const [showCart, setShowCart] = useState(false);
  const loginCtx = useContext(LoginContext);

  const isLoggedIn = loginCtx.isLoggedIn;

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <CartProvider>
      {showCart && <Cart onClose={handleClose} />}
      <Routes>
        <Route path="/" element={<RootLayout onShow={handleShow} />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/store"
            element={isLoggedIn ? <Store /> : <Navigate to="/login" />}
          />

          <Route path="/store/:title" element={<ProductDetail />} />

          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/contactUs"
            element={isLoggedIn ? <ContactUs /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate to="/store" />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
