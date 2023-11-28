import React,{useRef} from "react";
import AboutHeader from "../About/AboutHeader";
import Footer from "../Layout/Footer";
import { Container, Card, Form, Button} from "react-bootstrap";

const ContactUs = () => {

  const nameRef = useRef("")
  const emailRef = useRef("")
  const numberRef = useRef("")

 const  submitHandler = async (event) => {
     event.preventDefault()

    const detail = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      number:numberRef.current.value
    }

    try{
      const response = await fetch (
        "https://react-ecommerce-104c7-default-rtdb.firebaseio.com/contactDetail.json",
        {
          method: "POST",
          body: JSON.stringify(detail),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }

      const data = await response.json();
      console.log(data);
  
    } catch (error) {
       console.log(error.message)
    }
   
    
   
 }
    
 
  return (
    <>
      <AboutHeader />
      <Container
        className="d-flex justify-content-center align-items-center mt-3"
        style={{
          flex: 1,
          minHeight: "50vh",
        }}
      >
        <Card
          style={{
            width: "600px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "auto",
            padding: "20px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            ContactUs
          </h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name"  ref={nameRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  ref={emailRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="number" placeholder="Enter number" ref={numberRef}/>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
