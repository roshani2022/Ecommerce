import React from "react";
import HeaderButton from "./HeaderButton";
import { Navbar, Nav, Container,  Row, Col, } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar sticky="top" 
        expand="lg"
        bg="dark"
        variant="dark"
        
      >
        <Container>
          <Nav className="me-auto"
          style={{ fontWeight: "bold", fontFamily: "fangsong" }}>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
          {/* <Button variant="outline-primary" style={{ color: "white" }} 
          onClick ={props.onShowCart}>
            CART
          </Button>
          <Badge bg="secondary"
            className="text-white"
            style={{
              fontSize: "0.8em",
              position: "relative",
              top: "-1em",
              marginLeft: "0.2em",
            }}
          >
            0
          </Badge> */}
           <HeaderButton  onClick ={props.onShowCart}/>
        </Container>
       
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
                fontSize:"100px"
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