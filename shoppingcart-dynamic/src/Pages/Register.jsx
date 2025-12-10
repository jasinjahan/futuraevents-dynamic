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
                                        <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
                                            <Form.Label>FullName</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Fullname" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                         <Form.Group as={Col} className="mb-3" controlId="formGroupEmail1">
                                            <Form.Label>Enter Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email" />
                                        </Form.Group>
                                    </Row>
                                     <Row>
                                         <Form.Group as={Col} className="mb-3" controlId="formGrouppasssword">
                                            <Form.Label> Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter Password" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="d-grid">
                                        <Button> Sign in
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