import { Col, Container, Row, Table } from "react-bootstrap";

const Cart = () => {
    return (
        <Container>
            <Row>
                <Col className="mt-4 ">
                    <h4>Cart Items</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Photo </th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>photo</td>
                                <td>Sample 01</td>
                                <td>199</td>
                                <td>1</td>
                                <td>Remove</td>
                            </tr>

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default Cart;