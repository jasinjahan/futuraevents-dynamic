import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function EventDetails() {


    const { events } = useSelector((state) => state.eventState)





    const { id } = useParams();


    const event = events.find((pr) => pr.id === Number(id));
    console.log(event);

    return (






        <Container>
            <Row>
                <Col>
                    <h3>Event Details</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>

                    <Image src={event?.eventphoto } alt={event?.eventname} className="card-img-top"/>

                </Col>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>
                                {event?.eventname ?? ''}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {event?.eventprice ?? ''}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {event?.eventdescription ?? ''}
                        </ListGroup.Item>

                    </ListGroup>




                </Col>
            </Row>

        </Container>
    )
}
export default EventDetails