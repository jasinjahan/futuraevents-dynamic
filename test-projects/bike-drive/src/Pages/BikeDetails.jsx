import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function BikeDetails({ bikes }) {

    const { id } = useParams();


    const bike = bikes.find((pr) => pr.id === Number(id));




    console.log(bike);

    return (






        <Container>
            <Row>
                <Col>
                    <h3>bike Details</h3>
                </Col>
            </Row>
            <Row>
                <Col md={3}>

                    <Image src={bike?.bikePhoto} alt={bike?.bikeName} />

                </Col>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
<h3>
    {bike?.bikeName ?? ''}
</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {bike?.bikePrice ?? ''}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {bike?.bikeDescription ?? ''}
                        </ListGroup.Item>
                      
                    </ListGroup>




                </Col>
            </Row>

        </Container>
    )
}
export default BikeDetails