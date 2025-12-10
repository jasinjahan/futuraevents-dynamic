import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mt-4">
                        <Row>
                            <Col>
                                <h2>Login</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="Password" placeholder="Enter Password" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col className="d-grid">
                                            <Button type="submit" variant="primary" >Login</Button>

                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-4">
                                <p>if you don't have a account , <Link to="/register"> register now</Link> </p>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>



        </>
    )
}
export default Login