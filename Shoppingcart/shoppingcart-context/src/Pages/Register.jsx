import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/userSlice";


function Register() {
    const { Formik } = formik;

    const navigate = useNavigate();
    const dispatch = useDispatch();




    const schema = yup.object().shape({
        fullname: yup.string().required("Please Enter Your FullName").min(2, "Full Name should me min 2 characters").max(20, "Max Full Name characters exceed 20"),
        email: yup.string().email("Please enter a valid email").required("Plases enter your email"),
        password: yup.string().required("Plaese enter your password"),

    });

    const handleRegisterForSubmit = (values) => {

        values.id = Date.now();
        values.role = "User" ;
        values.status = true;
        

        dispatch(userRegister(values));

        toast.success(" User registerd successfull");

        navigate("/login")
        localStorage.setItem("users", JSON.stringify(users));
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
                                    }}
                                >

                                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (

                                        <Form noValidate onSubmit={handleSubmit} >
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
                                                    <Form.Label>FullName</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="fullname"
                                                        placeholder="Enter Fullname"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
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
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupEmail1">
                                                    <Form.Label>Enter Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter Email"
                                                        onChange={handleChange}
                                                        value={values.email}
                                                        onBlur={handleBlur}
                                                        isValid={touched.email && !errors?.email}
                                                        isInvalid={touched.email && !!errors.email}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGrouppasssword">
                                                    <Form.Label> Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter Password"
                                                        onChange={handleChange}
                                                        value={values.password}
                                                        onBlur={handleBlur}
                                                        isValid={touched.password && !errors?.password}
                                                        isInvalid={touched.password && !!errors.password}

                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.password}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="d-grid">
                                                <Button type="submit"> Sign in
                                                </Button>
                                            </Row>
                                        </Form>
                                    )}



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