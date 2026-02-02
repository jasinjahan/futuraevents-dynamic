import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
    const { Formik } = formik;
    const navigate=useNavigate();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const schema = yup.object().shape({
        fullname: yup.string().required("Please enter your name ").min(2, "The number of character min 2 ").max(10, "The maximum character is 20"),
        email: yup.string().email("please enter a valid email").required("Please enter your email address"),
        password: yup.string().required("Please enter your password"),

    });
    const handleRegisterForSubmit = (values) => {
      
        
        values.id =Date.now();
        users.push(values)

        localStorage.setItem("users", JSON.stringify(users));
        toast.success("User Registered Successfully")
        navigate("/login");

    }
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
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleRegisterForSubmit}
                                    initialValues={{
                                        fullname: "",
                                        email: "",
                                        password: ""
                                    }} >
                                    {({ handleSubmit, handleChange,handleBlur, values, touched, errors }) => (


                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formGroupName">
                                                    <Form.Label>Enter Name </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="fullname"
                                                        placeholder="Enter Name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.fullname}
                                                        isValid={touched.fullname && !errors?.fullname}
                                                        isInvalid={touched.fullname && !!errors.fullname}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.fullname}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter email"
                                                         onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.email}
                                                        isValid={touched.email && !errors?.email}
                                                        isInvalid={touched.email && !!errors.email}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formGrouppassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter password"
                                                         onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.password}
                                                        isValid={touched.password && !errors?.password}
                                                        isInvalid={touched.password && !!errors.password}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.password}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Button type="submit" className="d-grid">
                                                    Sign in
                                                </Button>
                                            </Row>
                                        </Form>


                                    )




                                    }

                                </Formik>

                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>

        </>
    )
}
export default Register