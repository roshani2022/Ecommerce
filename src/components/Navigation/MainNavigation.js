import React, { useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";


const MainNavigation = (props) => {

  
  const location = useLocation();

  const isStoreVisible = location.pathname === "/store";

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
        style={{ borderBottom: "1px solid white",height:"3rem"}}
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
              to="/"
              style={{
                marginRight: "15px",
                textDecoration: "none",
                color: "white",
              }}
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
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "15px",
              }}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contactUs"
              style={{ textDecoration: "none", color: "white",marginRight:"15px" }}
            >
              CONTACT US
            </NavLink>

              <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white",marginRight:"15px" }}
            >
              LOGIN
            </NavLink>

            
            
          </Nav>
        </Container>
        {isStoreVisible && (
          <div>
            <Button
              variant="outline-primary"
              style={{ color: "white" }}
              to="/cart"
              size="sm"
              onClick={() => props.onShow()}
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
