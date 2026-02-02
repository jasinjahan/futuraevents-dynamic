import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = () => {

    const [userLoginData, setUserLoginData] = useState({
        email:'',
        password:''
    });
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});

    const handleKeyUp = (event)=>{

        setUserLoginData((prev)=>{
            const updatedData = {...prev};
            updatedData[event.target.name] = event.target.value;
            return updatedData;
        });

        if(errors[event.target.name]){
            setErrors((prev) => {
                return {...prev, [event.target.name] : event.target.validationMessage || ''};
            })
        }

    }

    const handleLoginSubmit = (event)=>{
        event.preventDefault();

        const form = event.currentTarget;

        if(form.checkValidity() === false){
            event.stopPropagation();

            const newErrors = {};

            form.querySelectorAll(':invalid').forEach((input) => {
                newErrors[input.name] = input.validationMessage;
            });

            setErrors(newErrors);

        }else{
            console.log("logindata---------->", userLoginData);
            setErrors({});
            
        }
        setValidated(true);
    }
    


    return (
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
                            <Form noValidate validated={validated} onSubmit={handleLoginSubmit}>
                                <Row>
                                    <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onKeyUp={handleKeyUp} name="email" required type="email" placeholder="Enter email" />
                                        <Form.Control.Feedback type="invalid">
                                            {errors?.email || "Please enter email"}
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback >
                                            Email looks good
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onKeyUp={handleKeyUp} name="password" required type="password" placeholder="Enter email" />
                                        <Form.Control.Feedback type="invalid">
                                           {errors?.password || "Please enter password"} 
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">
                                            Password looks good
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col className="d-grid">
                                        <Button type="submit" variant="primary">Login</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-3 text-center">
                            <p>If you don't have an account, <Link to="/register"> register now</Link></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login