import { Col, Container, Row, Table } from "react-bootstrap";

const WishList = () => {
    return (
        <Container>
            <Row>
                <Col className="mt-4">
                    <h4>Wish List Items</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bike Photo </th>
                                <th>Bike Name</th>
                                <th>BikePrice</th>
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
export default WishList ;