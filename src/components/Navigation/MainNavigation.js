import React, { useContext } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import LoginContext from "../Context/LoginContext";

const MainNavigation = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isStoreVisible = location.pathname === "/store";

  const cartCtx = useContext(CartContext);
  const loginCtx = useContext(LoginContext);

  const isLoggedIn = loginCtx.isLoggedIn;

  const logoutHandler = () => {
    loginCtx.logout();
    navigate("/Login");
  };

  let quantity = 0;

 
  cartCtx.items.forEach((item) => {
    quantity = Number(quantity) + Number(item.quantity);
  });

  
  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ borderBottom: "1px solid white", height: "3rem" }}
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
              to="/Home"
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
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "30px",
              }}
            >
              CONTACT US
            </NavLink>

            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "15px",
              }}
            >
              LOGIN
            </NavLink>
            {isLoggedIn && (
              <Button
                onClick={logoutHandler}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontWeight: "bold",
                  marginTop:'0px'
                }}
              >
                LOGOUT
              </Button>
            )}
          </Nav>
        </Container>
        {isStoreVisible && (
          <div >
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
