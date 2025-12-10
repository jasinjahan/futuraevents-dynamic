import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';


function Register() {
    const { Formik } = formik;
    const schema = yup.object().shape({
        fullname: yup.string().required("Please Enter Your FullName").min(2, "Full Name should me min 2 characters").max(20, "Max Full Name characters exceed 20"),
        email: yup.string().email("Please enter a valid email").required("Plases enter your email"),
        password: yup.string().required("Plaese enter your password"),

    });

    const handleRegisterForSubmit = () => {

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

                                    {({ handleSubmit, handleChange, values, touched, errors }) => (

                                        <Form noValidate onSubmit={handleSubmit} >
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
                                                    <Form.Label>FullName</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="fullname"
                                                        placeholder="Enter Fullname"
                                                        onChange={handleChange}
                                                        value={values.fullname}

                                                    />
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
                                                    />
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

                                                    />
                                                </Form.Group>
                                            </Row>
                                            <Row className="d-grid">
                                                <Button> Sign in
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