import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetails() {


    const { products } = useSelector((state) => state.productState)





    const { id } = useParams();


    const product = products.find((pr) => pr.id === Number(id));
    console.log(product);

    return (






        <Container>
            <Row>
                <Col>
                    <h3>Product Details</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>

                    <Image src={product?.photo} alt={product?.productName} />

                </Col>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>
                                {product?.productname ?? ''}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product?.price ?? ''}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product?.description ?? ''}
                        </ListGroup.Item>

                    </ListGroup>




                </Col>
            </Row>

        </Container>
    )
}
export default ProductDetails