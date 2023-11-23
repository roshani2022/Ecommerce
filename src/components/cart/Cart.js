import React from "react";
import CartItem from "./CartItem";
import { Button, Modal } from "react-bootstrap";

const Cart = (props) => {
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
          Total {"   "}${0}
        </h3>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button >PURCHASE</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
