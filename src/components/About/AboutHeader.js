import { Container,Col,Row } from "react-bootstrap";
const AboutHeader = () => {
    return (
        <>
         <Container fluid>
        <Row>
          <Col
            xs={12}
            style={{ background: "gray", padding: "20px", width: "100%" }}
          >
            <h1
              className="text-center"
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "fangsong",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "100px",
              }}
            >
              The Generics
            </h1>
          </Col>
        </Row>
      </Container>
        </>
    )
}
export default AboutHeader;