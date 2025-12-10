import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";


function EventDetails({ events}) {

    const {id} = useParams();



 const event = events.find((pr) => pr.id === Number(id));

 console.log(events);
 


    return (


        <> <Container>
            <Row>
               
                {events.map((events , index) => (
                    <Col md={6} lg={4} xl={3} xxl={2} key={index} className="mt-4" >

                        <Card className="events-card">


                            <Card.Img variant="top" src={events?.eventPhoto ?? null} />
                            <Card.Body>
                                <Card.Title>

                                    {events?.eventName ?? ""}
                                </Card.Title>
                                <Card.Text>
                                    {events?.eventDescription ?? ""}
                                </Card.Text>
                                <Button variant="primary"> Book events</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                )
                )}




            </Row>
            
        </Container>  </>);
}
export default EventDetails;
