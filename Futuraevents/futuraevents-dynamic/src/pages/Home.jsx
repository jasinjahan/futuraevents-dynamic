import { Container, Row, Card, Button , Col } from "react-bootstrap";
import HomeCarousels from "../components/HomeCarousels";
import "./Home.css"
import { Link } from "react-router-dom";



function Home({events , setCount ,count}) {


    const handleAddToCart=()=>{
        setCount(count+1)
    }

console.log(count);







    return (
        <>
            <HomeCarousels />


            <Container>

                <Row >
                      {events.map((events , index)=>(
                    <Col md={6} lg={4} xl={3} xxl={2} key={index} className="mt-4" >

                        <Card  className="events-card" >
                            <Link to={`/event/${events.id}`}>
                           


                            <Card.Img variant="top" src={events?.eventPhoto ?? null} />
                             </Link>
                            <Card.Body>
                                <Card.Title>

                                    {events?.eventName ?? ""}
                                </Card.Title>
                                <Card.Text>
                                  {events?.eventDescription ?? "" }
                                </Card.Text>
                                <Button onClick={handleAddToCart} variant="primary"> Book events</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                      )
                    )}




                </Row>

            </Container>

                        </>
    );



}

export default Home;