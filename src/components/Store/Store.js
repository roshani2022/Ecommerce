import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../Layout/Header";
import Product from "./Product";
import Footer from "../Layout/Footer";
import CartProvider from "../Context/CartProvider";
import Cart from "../cart/Cart";

const Store = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <CartProvider>
      {showCart && <Cart onClose={handleClose} />}
      <Header onShowCart={handleShow} />
      <Product />
      <Container className="justify-content-center">
        <Row>
          <Col xs={12} className="text-center mt-3">
            <Button
              style={{ background: "gray", color: "white", margin: "10px" }}
              onClick={() => handleShow()}
            >
              See the cart
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </CartProvider>
  );
};

export default Store;
