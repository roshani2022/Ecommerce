import { NavLink } from "react-router-dom";
import React from "react";
import HeaderButton from "./HeaderButton";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Nav 
            style={{ fontWeight: "bold", fontFamily: "fangsong"}}
          >
             <NavLink to="/home" style={{ marginRight: "15px", textDecoration: "none",color:"white" }}>HOME</NavLink>
            <NavLink to="/store" style={{ marginRight: "15px", textDecoration: "none",color:"white" }}>STORE</NavLink>
            <NavLink to="/about" style={{ textDecoration: "none",color:"white" }}>ABOUT</NavLink>
          </Nav>
        </Container>

        <HeaderButton onClick={props.onShowCart} />
      </Navbar>

      <Container fluid>
        <Row>
          <Col
            xs={12}
            style={{ background: "gray", padding: "20px", width: "100%" }}
          >
            <h1
              className="text-center"
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "fangsong",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "100px",
              }}
            >
              The Generics
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
