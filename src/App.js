import React, { useState} from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import RootLayout from "./components/Layout/Root";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/Context/CartProvider";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Store/ProductDetail";
import Login from "./components/Login/Login";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <CartProvider>
      {showCart && <Cart onClose={handleClose} />}
      <Routes>
        <Route path="/" element={<RootLayout onShow={handleShow} />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:title" element={<ProductDetail />} />

          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
