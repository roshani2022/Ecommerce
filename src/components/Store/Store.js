import { Container, Row, Col, Button } from "react-bootstrap";

import Product from "./Product";
import Footer from "../Layout/Footer";
import StoreHeader from "./StoreHeader";

const Store = () => {
  return (
    <>
      <StoreHeader />
      <Product />
      <Container className="justify-content-center">
        <Row>
          <Col xs={12} className="text-center mt-3">
            <Button
              style={{ background: "gray", color: "white", margin: "10px" }}
            >
              See the cart
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Store;
