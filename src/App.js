import React,{useState} from "react";
import "./App.css";
import Product from "./components/Products/Product";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Cart from "./components/cart/Cart"
import { Button ,Row,Col,Container} from "react-bootstrap";

function App() {

  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      
      {showCart && <Cart onClose={handleClose}/> }
      <Header onShowCart={handleShow} />
      <Product/>

    
       
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
