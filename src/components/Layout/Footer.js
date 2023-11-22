import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube, FaFacebook, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <Container
      fluid
      className="mt-1"
      style={{ background: "#63e1e5", color: "white", padding: "20px" }}
    >
      <Row className="justify-content-end">
        <Col xs={12} md={6}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "40px",
              fontFamily: "fangsong",
              marginLeft: "20px",
            }}
          >
            The Generics
          </h1>
        </Col>
        <Col xs={12} md={6}>
          <FaYoutube size={30} className="me-5" style={{ color: "red" }} />
          <FaFacebook size={30} className="me-5" />
          <FaSpotify size={30} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
