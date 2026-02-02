import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddProducts() {
    const { Formik } = formik;

    const navigate=useNavigate();

    const products = JSON.parse(localStorage.getItem("products")) || [];


    const schema = yup.object().shape({
        productname: yup.string().required("Please Enter  productname").min(2, "productname should me min 2 characters").max(20, "Max Full Name characters exceed 20"),
        price: yup.number().required("Plases enter your  price"),
        description: yup.string().required("Plaese enter your product description"),
        photo: yup.string().required("Plaese add your photo"),

    });

    const handleAddProducts = (values) => {

        values.id =Date.now();
        products.push(values);



        localStorage.setItem("products", JSON.stringify(products));
        toast.success(" Product added successfull");
        
        navigate("/")
    }



    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mt-4">

                        <Row>
                            <Col>

                                <h4>
                                    AddProducts
                                </h4>


                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleAddProducts}
                                    initialValues={{
                                        productname: "",
                                        price: "",
                                        description: "",
                                         photo: ""
                                    }}
                                >

                                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (

                                        <Form noValidate onSubmit={handleSubmit} >
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
                                                    <Form.Label>productname</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="productname"
                                                        placeholder="Enter productname"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.productname}
                                                        isValid={touched.productname && !errors?.productname}
                                                        isInvalid={touched.productname && !!errors.productname}

                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.productname}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupEmail1">
                                                    <Form.Label>Enter price</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="price"
                                                        placeholder="Enter price"
                                                        onChange={handleChange}
                                                        value={values.price}
                                                        onBlur={handleBlur}
                                                        isValid={touched.price && !errors?.price}
                                                        isInvalid={touched.price && !!errors.price}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.price}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGrouppasssword">
                                                    <Form.Label> description</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        name="description"
                                                        placeholder="Enter description"
                                                        onChange={handleChange}
                                                        value={values.description}
                                                        onBlur={handleBlur}
                                                        isValid={touched.description && !errors?.description}
                                                        isInvalid={touched.description && !!errors.description}

                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.description}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
                                                    <Form.Label>photo</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="photo"
                                                        placeholder="add product photo"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.photo}
                                                        isValid={touched.photo && !errors?.photo}
                                                        isInvalid={touched.photo && !!errors.photo}

                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.photo}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="d-grid">
                                                <Button type="submit"> Submit
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
export default AddProducts