import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
// style={{ fontFamily: "fantasy" }}
const CartItem = () => {
  return (
    <>
      <Container>
        <Row className="border-bottom">
          <Col md={5}>
            <h4 className="ms-4">ITEM</h4>
          </Col>
          <Col md={2}>
            <h4>PRICE</h4>
          </Col>
          <Col md={4}>
            <h4 className="px-3">QUANTITY</h4>
          </Col>
        </Row>
        {cartElements.map((product, index) => (
          <Row key={index} className="mb-2 mt-2 border-bottom dark" >
            <Col md={6}>
              <Row>
                <Col xs={5}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="img-fluid mt-2 product-image"
                  />
                </Col>
                <Col xs={4}>
                  <h3 className="px-3" style={{fontSize:"15px"}} >
                    {product.title}
                  </h3>
                </Col>
              </Row>
            </Col>
            <Col md={2} className="px-0" >{product.price}</Col>
            <Col md={4}>
              <Row>
                <Col xs={4} className="mt-2">
                  <span className="border border-primary p-2 ">
                    {product.quantity}
                  </span>
                </Col>
                <Col xs={8} >
                  <Button variant="danger">Remove</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default CartItem;

