import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <Container
      fluid
      className="mt-1"
      style={{ background: "#63e1e5", color: "white", padding: "20px" }}
    >
      <Row className="justify-content-start">
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
      </Row>
    </Container>
  );
};

export default HomeFooter;
