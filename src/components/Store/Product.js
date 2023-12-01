import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Product.css";
import CartContext from "../Context/CartContext";

 export const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = () => {
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (item) => {
    cartContext.addItem({
      ...item,
      id:item.title,
      quantity:1
    })
    
    
  };

  return (
    <Container >
      <h1 className="text-center mb-4" style={{ fontFamily: "fangsong" }}>
        Music
      </h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={6} lg={6} className="mb-4 ">
            <h3 className="ms-5" style={{ fontFamily: "fantasy" }}>
            <Link
                to={`/store/${product.title}`} // Include the dynamic parameter
                style={{ textDecoration: "none", color: "black" }}
              >
                {product.title}
              </Link>
            </h3>

            <img
              src={product.imageUrl}
              alt={product.title}
              className="img-fluid mt-2 product-image"
            />

            <Row className="mt-2 mb-2 " >
              <Col md={4} >
                <p>Price: ${product.price}</p>
              </Col>
              <Col md={4} >
                <Button
                  variant="primary"
                  onClick={() => addItemToCartHandler(product)}
                >
                  Add To Cart
                </Button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
