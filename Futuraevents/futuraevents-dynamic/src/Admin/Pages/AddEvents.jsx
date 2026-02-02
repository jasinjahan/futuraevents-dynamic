import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddEvents() {
    const { Formik } = formik;
    const navigate = useNavigate();
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const schema = yup.object().shape({
        eventname: yup.string().required("Please enter your eventname ").min(2, "The number of character min 2 ").max(10, "The maximum character is 20"),
        eventprice: yup.number("please enter eventpricel").required("Please enter your eventprice"),
        eventdescription: yup.string().required("Please enter your eventdescription"),
        eventphoto: yup.string().required("Please add eventphoto"),
    });
    const handleAddEvents = (values) => {


        values.id = Date.now();
        events.push(values)

        localStorage.setItem("events", JSON.stringify(events));
        toast.success("Event added Successfully")
        navigate("/home");

    }
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mt-4">
                        <Row>
                            <Col>
                                <h4>
                                    Add Events
                                </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleAddEvents}
                                    initialValues={{
                                        eventname: "",
                                        eventprice: "",
                                        eventdescription: "",
                                        eventphoto: ""
                                    }} >
                                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (


                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formGroupName">
                                                    <Form.Label>Enter eventname </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="eventname"
                                                        placeholder="Enter eventname"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.fullname}
                                                        isValid={touched.eventname && !errors?.eventname}
                                                        isInvalid={touched.eventname && !!errors.eventname}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.eventname}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label>Eventprice</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="eventprice"
                                                        placeholder="Enter eventprice"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.eventprice}
                                                        isValid={touched.eventprice && !errors?.eventprice}
                                                        isInvalid={touched.eventprice && !!errors.eventprice}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.eventprice}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formGrouppassword">
                                                    <Form.Label>Event description</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        name="eventdescription"
                                                        placeholder="Enter eventdescription"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.eventdescription}
                                                        isValid={touched.eventdescription && !errors?.eventdescription}
                                                        isInvalid={touched.eventdescription && !!errors.eventdescription}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.eventdescription}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                             <Row>
                                                <Form.Group className="mb-3" controlId="formGroupName12">
                                                    <Form.Label>Add Eventphoto </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="eventphoto"
                                                        placeholder="Add eventphoto"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.fullname}
                                                        isValid={touched.eventphoto && !errors?.eventphoto}
                                                        isInvalid={touched.eventphoto && !!errors.eventphoto}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.eventphoto}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Button type="submit" className="d-grid">
                                                    Submit
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
export default AddEvents