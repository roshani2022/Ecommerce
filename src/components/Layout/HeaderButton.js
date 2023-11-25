import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Button, Badge } from "react-bootstrap";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity = 0;

  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <>
      <Button
        variant="outline-primary"
        style={{ color: "white" }}
        onClick={props.onClick}
      >
        CART
      </Button>
      <Badge
        bg="secondary"
        className="text-white"
        style={{
          fontSize: "0.8em",
          position: "relative",
          top: "-1em",
          marginLeft: "0.2em",
        }}
      >
        {quantity}
      </Badge>
    </>
  );
};

export default HeaderButton;
