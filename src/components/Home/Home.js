import { Container, Row, Col } from "react-bootstrap";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

const plays = [
  { date: "JUL16", city: "DETROIT, MI", theater: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", city: "TORONTO, ON", theater: "BUDWEISER STAGE" },
  { date: "JUL22", city: "BRISTOW, VA", theater: "JIGGY LUBE LIVE" },
  { date: "JUL29", city: "PHOENIX, AZ", theater: "AK-CHIN PAVILION" },
];

const Home = () => {
  return (
    <>
      <HomeHeader />

      <Container className="text-center mt-2">
        <h1>TOURS</h1>

        {plays.map((ele, index) => (
          <Row key={index} className="mb-3" style={{borderBottom:"1px solid black"}}>
            <Col>{ele.date}</Col>
            <Col>{ele.city}</Col>
            <Col>{ele.theater}</Col>
            <Col>
              <button className="btn btn-info mb-3" style={{color:"white"}}>BUY TICKETS</button>
            </Col>
          </Row>
        ))}
      </Container>

      <HomeFooter />
    </>
  );
};

export default Home;

