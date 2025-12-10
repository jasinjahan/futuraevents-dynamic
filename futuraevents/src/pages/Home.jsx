import { Container, Row, Card, Button } from "react-bootstrap";
import HomeCarousels from "../components/HomeCarousels";



function Home() {
    return (
        <>
            <HomeCarousels />


            <Container>

                <Row md={6} lg={4} xl={3} xxl={2} className="mt-4 ">



                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4eb800110115717.5fe401ef725a8.png" />
                        <Card.Body>
                            <Card.Title>Futuraevents</Card.Title>
                            <Card.Text>
                                Generally, an introduction
                                paragraph works best in 2-3
                                lines.

                                The White Mansion
                                12011 Middlesex, UK

                                RSVP
                                888 90 4444
                                rsvp@yourcompany.com
                            </Card.Text>
                            <Button variant="primary"> Book events</Button>
                        </Card.Body>
                    </Card>

                </Row>

            </Container>

        </>
    );

}
export default Home;