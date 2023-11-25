import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Store from "./components/Store/Store";

const router = createBrowserRouter([
  { path: "/about", element: <About /> },
  { path: "/store", element: <Store /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
