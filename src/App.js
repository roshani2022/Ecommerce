import React, { useState } from "react";
import "./App.css";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import RootLayout from "./components/Layout/Root";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/Context/CartProvider";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Store/ProductDetail";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  /* these are also working ...*/
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout onShow={handleShow} />,

  //     children: [
  //       { path: "/store", element: <Store handleShow={handleShow}/> },
  //       { path: "/about", element: <About /> },
  //       { path: "/", element: <Home /> },
  //       { path: "/contactUs", element: <ContactUs /> },
  //       {
  //         path: "/store/:title",         // Add a dynamic parameter for product title
  //         element: <ProductDetail />,
  //       }, 
  //     ],
  //   },
  // ]);



  return (
    <CartProvider>
      {/* <RouterProvider router={router} /> */}

      {showCart && <Cart onClose={handleClose} />}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout onShow={handleShow} />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:title" element={<ProductDetail />} />

          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
