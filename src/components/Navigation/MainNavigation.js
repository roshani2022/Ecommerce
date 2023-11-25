import React, { useContext, useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const MainNavigation = (props) => {
  const location = useLocation();
  const [buttonVisible, setButtonVisible] = useState(
    location.pathname === "/store"
  );

  useEffect(() => {
    setButtonVisible(location.pathname === "/store");
  }, [location.pathname]);

  const buttonVisibleHandler = () => {
    setButtonVisible(false);
  };

  const cartCtx = useContext(CartContext);

  let quantity = 0;

  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ borderBottom: "1px solid white" }}
      >
        <Container className="justify-content-center">
          <Nav
            style={{
              fontWeight: "bold",
              fontFamily: "fangsong",
              textDecoration: "none",
            }}
          >
            <NavLink
              to="/home"
              style={{
                marginRight: "15px",
                textDecoration: "none",
                color: "white",
              }}
              onClick={buttonVisibleHandler}
            >
              HOME
            </NavLink>
            <NavLink
              to="/store"
              style={{
                marginRight: "15px",
                textDecoration: "none",
                color: "white",
              }}
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
              onClick={buttonVisibleHandler}
            >
              ABOUT
            </NavLink>
          </Nav>
        </Container>
        {buttonVisible && (
          <div>
            <Button
              variant="outline-primary"
              style={{ color: "white" }}
              onClick={props.onShow}
              to="/cart"
              size="sm"
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
          </div>
        )}
      </Navbar>
    </>
  );
};

export default MainNavigation;
