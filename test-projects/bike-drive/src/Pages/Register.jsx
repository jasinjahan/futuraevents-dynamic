import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const Register = () => {

  const [userLoginData ,setUserLoginData] = useState({
        email:'',
        password:''
        

    });

   const handleKeyUp = (event)=>{

    console.log(event.target.value);
    
   }

    return (
        <>

            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mt-4">
                        <Row>
                            <Col>
                                <h2>
                                    Register
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                         <Form.Group as={Col} className="mb-3" controlId="formGroupname">
                                            <Form.Label> Fullname</Form.Label>
                                            <Form.Control onKeyUp={handleKeyUp} name="fullname" type="text" placeholder="Enter Fullname" />
                                        </Form.Group> 
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onKeyUp={handleKeyUp} name="email" type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name="password" type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col className="d-grid">
                                            <Button type="submit" variant="primary"> Register</Button>

                                        </Col>
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
export default Register;

