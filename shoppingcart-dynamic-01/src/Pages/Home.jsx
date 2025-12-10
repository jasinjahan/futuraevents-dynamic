import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import HomeCarousels from "../componenets/HomeCarousels";
import Products from "./Products";
import { Link } from "react-router-dom";


function Home({ products, setCartItems }) {



    const handleAddToCart = (product) => {

        setCartItems((prev) => {
            const newItems = [...prev];
            newItems.push(product);
            return newItems
        });



    }


    return (
        <>
            <HomeCarousels />
            <Container>
                {/* <h5> Count:{count}  </h5> */}
                <Row>
                    {products.map((product, index) => (
                        <Col md={6} lg={4} xl={3} key={index} className="mt-4 ">
                            <Card className="product-card">
                                <Link to={`/product/${product.id}`}>
                                    <Card.Img variant="top  " src={product?.productPhoto ?? null} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>
                                        {product?.productName ?? ""}
                                    </Card.Title>
                                    <Card.Text>
                                        {product?.productDescription ?? ""}
                                    </Card.Text>
                                    <Button onClick={() => handleAddToCart(product)} variant="primary">Add to cart</Button>
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