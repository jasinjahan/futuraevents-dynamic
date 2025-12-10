import { Button, Col, Container, Form, Row } from "react-bootstrap"

const Register = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={4} className="mt-4">
                    <Row>
                        <Col>
                            <h4>Register </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Row>
                                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Fullname</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Fullname" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" />
                                    </Form.Group>
                                </Row>
                                 <Row>
                                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col className="d-grid">
                                        <Button>Register</Button>
                                    </Col>
                                </Row>

                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;