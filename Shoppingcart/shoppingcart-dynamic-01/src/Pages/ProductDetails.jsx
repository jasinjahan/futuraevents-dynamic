import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetails({ products }) {

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
                <Col md={3}>

                    <Image src={product?.productPhoto} alt={product?.productName} />

                </Col>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
<h3>
    {product?.productName ?? ''}
</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product?.productPrice ?? ''}
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
export default ProductDetails