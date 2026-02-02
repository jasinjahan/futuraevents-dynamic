import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useSelector } from "react-redux"

function Events({}) {

     const {events=[]} = useSelector((state)=> state.eventState);

     console.log("events----",events);
     
    
     



    return (
        <Container>
            <Row>

                <Col>

                    <h3>
                        events 
                    </h3>
                </Col>
            </Row>



            <Row >
                {events.map((events , index) => (
                    <Col md={6} lg={4} xl={3} xxl={2} key={index} className="mt-4" >

                        <Card className="events-card">


                            <Card.Img variant="top" src={events?.eventphoto ?? null} />
                            <Card.Body>
                                <Card.Title>

                                    {events?.eventname ?? ""}
                                </Card.Title>
                                <Card.Text>
                                    {events?.eventdescription ?? ""}
                                </Card.Text>
                                <Button variant="primary"> Book events</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                )
                )}




            </Row>
        </Container>









    )
} export default Events