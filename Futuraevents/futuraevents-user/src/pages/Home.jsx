import { Container, Row, Card, Button, Col } from "react-bootstrap";
import HomeCarousels from "../components/HomeCarousels";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWish } from "../redux/eventSlice";

function Home() {
  const { events } = useSelector((state) => state.eventState);
  const dispatch = useDispatch();

  const handleAddToWish = (event) => {
    dispatch(addToWish(event));
  };

  return (
    <>
      <HomeCarousels />

      <Container>
        <Row>
          {events.map((event, index) => (
            <Col md={6} lg={4} xl={3} xxl={2} key={event.id || index} className="mt-4">
              <Card className="events-card">
                <Link to={`/event/${event.id}`}>
                  <Card.Img
                    variant="top"
                    src={event.image}
                    className="card-img-top"
                  />
                </Link>

                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.price}</Card.Text>

                  <Button
                    variant="primary"
                    onClick={() => handleAddToWish(event)}
                  >
                    Book event
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
