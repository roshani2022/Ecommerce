import React from "react";
import CartItem from "./CartItem";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const Cart = (props) => {

 const cartContext = useContext(CartContext)

    const handlePurchase = () => {
        
        window.alert("Thank you for purchasing!");
      };

      let totalAmount = 0;
      cartContext.items.forEach((item) => {
        totalAmount += item.price * item.quantity;
      });

  return (
    <Modal show={true} onHide={props.onClose} backdrop="static" keyboard={false} size="md">
      <Modal.Header closeButton >
        <Modal.Title  className="justify-content-center" style={{ fontFamily: "Metal Mania", fontWeight: "bold"}} >
          CART
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartItem />
        <h3 className="text-end">
          Total {"   "}${totalAmount}
        </h3>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={handlePurchase}>PURCHASE</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
