import { Container, Row, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

const HomeHeader = () => {
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
            <button
              style={{
                display: "block",
                border: "1px solid #56CCF2",
                padding: "15px 30px",
                fontSize: "23px",
                cursor: "pointer",
                color: "white",
                margin: "10px auto",
                background: "inherit",
              }}
            >
              Get Our Latest Album
            </button>

            <button
              style={{
                display: "block",
                border: "2px solid #56CCF2",
                borderRadius: "50%",
                padding: "10px",
                fontSize: "px",
                cursor: "pointer",
                color: "white",
                background: "inherit",
                marginTop: "15px",
                margin: "10px auto",
              }}
            >
              <FaPlay style={{ color: "#56CCF2" }}/>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeHeader;

