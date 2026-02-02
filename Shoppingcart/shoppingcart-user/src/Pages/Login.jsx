import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../redux/userSlice";

const Login = () => {

  

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated}= useSelector((state)=> state.userState);

    const { users } = useSelector((state) => state.userState)

    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: '',
    });
    const [validated, setValidated] = useState(false);

    const [errors, setErrors] = useState({});

    const handleKeyUp = (event) => {




        setUserLoginData((prev) => {
            const updatedData = { ...prev };
            updatedData[event.target.name] = event.target.value;
            return updatedData;

        });
        if (errors[event.target.name]) {
            setErrors((prev) => {
                return { ...prev, [event.target.name]: "" };


            })
        }

    }





    const handleLoginSubmit = (event) => {
        // console.log("userLoginData----------->", userLoginData);

        event.preventDefault();

        const form = event.currentTarget;


        if (form.checkValidity() === true) {
            const user = users.find((u) => u.email === userLoginData.email);

            if (!user) {
                return toast.error("user not found");

            }
            if (user.password !== userLoginData.password) {
                return toast.error("invalid credentuals");
            }

            dispatch(userLogin(user))
            toast.success("user logged successfully");
            setErrors({});
            navigate("/")



        } else {

            // setErrors({});
            //    toast.success("Login Succesfull");
            //    navigate("/");

            event.stopPropagation();
            const newErrors = {};
            form.querySelectorAll(":invalid").forEach((input) => {
                newErrors[input.name] = input.validationMessage;
            });
            setErrors(newErrors);

        }


        setValidated(true);

    }


    return (

        <>
    {isAuthenticated ? (
    <Navigate to={"/"} />
    ) : (
          <Container>
            <Row className="justify-content-center">
                <Col md={4} className="mt-4" >
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
                                        <Form.Control onKeyUp={handleKeyUp} required name="email" type="email" placeholder="Enter email" />
                                        <Form.Control.Feedback type="invalid">
                                            {errors?.email || "Please enter your email"}
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">
                                            Email looks good
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>

                                    <Form.Group as={Col} className="mb-3" controlId="formpassword">
                                        <Form.Label>password</Form.Label>
                                        <Form.Control
                                            name="password"
                                            required
                                            type="password"
                                            placeholder="Enter password"
                                            onKeyUp={handleKeyUp}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors?.password || " please enter your passsword"}
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">
                                            strong password
                                        </Form.Control.Feedback>

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
            </Row >



        </Container >

    )}

   

    
  
        </>
    )
    
}


export default Login;
