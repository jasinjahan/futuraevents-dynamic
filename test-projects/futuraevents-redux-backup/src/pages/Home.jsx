import { Container, Row, Card, Button , Col } from "react-bootstrap";
import HomeCarousels from "../components/HomeCarousels";
import "./Home.css"
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addToWish } from "../redux/eventSlice";



function Home() {

    // const {events} = useSelector((state)=> state.eventState);
const { events} = useSelector((state) => state.eventState);

const dispatch=useDispatch();

    const handleAddToWish=(event)=>{
      

        // setwishItems((prev)=>{
        //     const newItems=[...prev];
        //     newItems.push(event);
        //     return newItems

        // })
       
        dispatch(addToWish(event));

           
        
    }









    return (
        <>
            <HomeCarousels />


            <Container>

                <Row >
                      {events.map((event , index)=>(
                    <Col md={6} lg={4} xl={3} xxl={2} key={index} className="mt-4" >

                        <Card  className="events-card" >
                            <Link to={`/event/${event.id}`}>
                           


                            <Card.Img variant="top" src={events?.eventphoto ?? null} className="card-img-top" />
                             </Link>
                            <Card.Body>
                                <Card.Title>

                                    {events?.eventname ?? ""}
                                </Card.Title>
                                <Card.Text>
                                  {events?.eventprice ?? "" }
                                </Card.Text>
                                <Button onClick={handleAddToWish(event)} variant="primary"> Book events</Button>
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