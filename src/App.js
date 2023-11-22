import React from "react";
import "./App.css";
import Product from "./components/Products/Product";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Button ,Row,Col,Container} from "react-bootstrap";

function App() {
  return (
    <>
      
      <Header/>
      <Product/>
    
      {/* Button above the footer */}
      <Container className="justify-content-center" >
      
      <Row >
        <Col xs={12} className="text-center mt-3">
          <Button style={{ background: "gray", color: "white", margin: "10px" }}>See the cart</Button>
        </Col>
      </Row>
      </Container>
      
      <Footer/>
    
    </>
  );
}

export default App;
