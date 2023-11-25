import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const CartItem = (props) => {

  const cartContext = useContext(CartContext)

  const removeItem = (id) => {
     cartContext.removeItem(id)
  }
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
        {cartContext.items.map((product, index) => (
          <Row key={index} className="mb-2 mt-2 border-bottom dark" >
            <Col md={6}>
              <Row>
                <Col xs={5}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="img-fluid mt-2 mb-2 product-image"
                  />
                </Col>
                <Col xs={4}>
                  <h3 className="px-3" style={{fontSize:"15px"}} >
                    {product.title}
                  </h3>
                </Col>
              </Row>
            </Col>
            <Col md={2} className="px-0 mt-3" >{product.price}</Col>
            <Col md={4}>
              <Row  className="mt-3">
                <Col xs={4}>
                  <span className="border border-primary p-2 ">
                    {product.quantity}
                  </span>
                </Col>
                <Col xs={8} >
                  <Button variant="danger" onClick={()=>removeItem(product.id)}>Remove</Button>
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

