import { Button, Card, Col, Container, Row,  } from "react-bootstrap";
import { useSelector } from "react-redux";

const Products = ({  }) => {


const {products} = useSelector((state)=> state.productState)

console.log("products----------" , products);





    return (

        <Container>
            <Row>
                <Col>
                    <h2>
                        products
                    </h2>


                </Col>
            </Row>
            <Row>
                {products.map((products , index) => (
                    <Col md={6} lg={4} xl={3} key={index} className="mt-4 ">
                        <Card className="product-card">
                            <Card.Img variant="top  " src={products?.photo ?? null} />
                            <Card.Body>
                                <Card.Title>
                                    {products?.productname ?? ""}
                                </Card.Title>
                                <Card.Text>
                                    {products?.description ?? ""}
                                </Card.Text>
                                <Button variant="primary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                )

                )}


            </Row>
        </Container>








    )
}

export default Products;