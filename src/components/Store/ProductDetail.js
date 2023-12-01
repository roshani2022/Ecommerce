import React from "react";
import { useParams } from "react-router-dom";
import { Container, Col,} from "react-bootstrap";
import { productsArr } from "./Product";
import AboutHeader from "../About/AboutHeader";
import Footer from "../Layout/Footer";

const ProductDetail = () => {
  const params = useParams();

  const product = productsArr.find((p) => p.title === params.title);
  
  
  return (
    <>
      <AboutHeader />
      <Container className="d-flex justify-content-center align-items-center">
        <Col >
          <h1>{product.title}</h1>

          {/* Display different images of the product if available */}
          
            <Col><img
            src={product.imageUrl}
            alt={`${product.title}`}
            className="img-fluid mt-2 product-image"
          /></Col>
            <Col><img
            src={product.imageUrl}
            alt={`${product.title}`}
            className="img-fluid mt-2 product-image"
          /></Col>
            <Col><img
            src={product.imageUrl}
            alt={`${product.title}`}
            className="img-fluid mt-2 product-image"
          /></Col>
           
          <img
            src={product.imageUrl}
            alt={`${product.title}`}
            className="img-fluid mt-2 product-image"
          />

          <h4> Price: ${product.price}</h4>

          <h3>Reviews</h3>
          <p>This is a very good Product</p>
          <p>I Like to buy it again</p>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;


