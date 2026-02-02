import { Button, Card, Col, Container, Row } from "react-bootstrap";

import HomeCarousels from "../componenets/HomeCarousels";
import Products from "./Products";
import { Link } from "react-router-dom";


function Home({products,setCount ,count}) {




    const handleAddToCart = ()=>{
       
        setCount(count + 1);
        
    }

           console.log(count);
           
    
    return (
        <>
            <HomeCarousels />
            <Container>
                {/* <h5> Count:{count}  </h5> */}
                <Row>
                    {products.map((products,index)=>(
                        <Col md={6} lg={4} xl={3} key={index}  className="mt-4 ">
                        <Card className="product-card">
                            <Link to={`/product/${products.id}`}>
                            <Card.Img variant="top  " src={products?.productPhoto ?? null} />
                            </Link>
                            <Card.Body>
                                <Card.Title>
                                    {products?.productName ?? ""}
                                </Card.Title>
                                <Card.Text>
                                   {products?.productDescription ?? ""}
                                </Card.Text>
                                <Button onClick={handleAddToCart} variant="primary">Add to cart</Button>
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