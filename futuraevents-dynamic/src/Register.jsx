import { Button, Col, Container, Form, Row } from "react-bootstrap"

function Register() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mt-4">
                        <Row>
                            <Col>
                                <h4>
                                    Register
                                </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formGroupName">
                                            <Form.Label>Enter Name </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formGrouppassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter password" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Button className="d-grid">
                                            Sign in
                                        </Button>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>

        </>
    )
}
export default Register