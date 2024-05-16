import React, { useState, useContext, Suspense } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/Context/CartProvider";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Store/ProductDetail";
import LoginContext from "./components/Context/LoginContext";

const About = React.lazy(() => import("./components/About/About"));
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const Store = React.lazy(() => import("././components/Store/Store"));
const Login = React.lazy(() => import("./components/Login/Login"));

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
            element={
              isLoggedIn ? (
                <Suspense fallback={<p>Loading....</p>}>
                  <Store />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/store/:title" element={<ProductDetail />} />
          <Route
            path="/about"
            element={
              isLoggedIn ? (
                <Suspense fallback={<p>Loading....</p>}>
                  <About />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/contactUs"
            element={
              isLoggedIn ? (
                <Suspense fallback={<p>Loading...</p>}>
                  <ContactUs />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Suspense fallback={<p>Loading...</p>}>
                  <Login />
                </Suspense>
              ) : (
                <Navigate to="/store" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
