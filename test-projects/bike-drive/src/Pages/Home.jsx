import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css"



import { Link } from "react-router-dom";
import HomeCarousels from "../Components/HomeCarousels";



function Home({bikes,setWishItems}) {




    const handleAddToWish = (bike)=>{
       
    
        setWishItems((prev) => {
            const newItems = [...prev];
            newItems.push(bike);
            return newItems
        });

    }

        //    console.log(count);
           
    
    return (
        <>
            <HomeCarousels />
            <Container>
                {/* <h5> Count:{count}  </h5> */}
                <Row>
                    {bikes.map((bike,index)=>(
                        <Col md={6} lg={4} xl={3} key={index}  className="mt-4 ">
                        <Card className="bike-card">
                            <Link to={`/bike/${bike.id}`}>
                            <Card.Img variant="top  " src={bike?.bikePhoto ?? null} />
                            </Link>
                            <Card.Body>
                                <Card.Title>
                                    {bike?.bikeName ?? ""}
                                </Card.Title>
                                <Card.Text>
                                   {bike?.bikeDescription ?? ""}
                                </Card.Text>
                                <Button onClick={()=> handleAddToWish(bike)} variant="primary">Add to wishlist</Button>
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