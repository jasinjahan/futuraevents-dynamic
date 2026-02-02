import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import HomeCarousels from "../componenets/HomeCarousels";
import Products from "./Products";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/productSlice";


function Home() {

    const {products} = useSelector((state) => state.productState);
    const dispatch = useDispatch();

   


    const handleAddToCart = (product) => {

        

     dispatch(addToCart(product));

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
                                    <Card.Img variant="top  " src={product?.image ?? null} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>
                                        {product?.title ?? ""}
                                    </Card.Title>
                                    <Card.Text>
                                        {product?.description ?? ""}
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