import { Button, Card, Col, Container, Row,  } from "react-bootstrap";

const Products = ({ products }) => {
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
                            <Card.Img variant="top  " src={products?.productPhoto ?? null} />
                            <Card.Body>
                                <Card.Title>
                                    {products?.productName ?? ""}
                                </Card.Title>
                                <Card.Text>
                                    {products?.productDescription ?? ""}
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