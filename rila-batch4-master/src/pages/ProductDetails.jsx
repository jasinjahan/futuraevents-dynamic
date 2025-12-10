import { Col, Container, Image, ListGroup, Row } from "react-bootstrap"
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {

    const { id } = useParams(); // {id:10}


    const product = products.find((pr) => pr.id === Number(id));

    console.log("product----------->", product);

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Product details</h4>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Image src={product?.productPhoto ?? null} alt={product?.productName ?? ''} />
                </Col>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>
                                {product?.productName ?? ''}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            ₹{product?.productPrice ?? 0}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product?.productDescription ?? ''}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;