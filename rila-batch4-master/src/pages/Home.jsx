import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import HomeCarousel from "../components/HomeCarousel";
import { Link } from "react-router-dom";

function Home({ products, setCartItems }) { // a = { x: [{},{}], age:20}  // const {x} // user = {id:10} // const {id} = user; // const {x} = a

    const handleAddToCart = (product) => {
        console.log("inside handleAddToCart--->");
        // count++;
        setCartItems((prev)=> {
            const newItems = [...prev];
             newItems.push(product);
             return newItems;
        });
    }




    return (
        <>
            <HomeCarousel />
            <Container>
             
                <Row>
                    {products.map((product, index) => (
                        <Col md={6} lg={4} xl={3} xxl={2} key={index} className="mt-4">
                            <Card className="product-card">
                                <Link to={`/product/${product.id}`}>
                                    <Card.Img variant="top" src={product?.productPhoto ?? null} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>
                                        {product?.productName ?? ''}
                                    </Card.Title>
                                    <Card.Text>
                                        {product?.productDescription ?? ''}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>handleAddToCart(product)}>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}


                </Row>
            </Container>
        </>
    )
}

export default Home;