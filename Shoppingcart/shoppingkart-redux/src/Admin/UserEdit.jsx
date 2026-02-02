import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { editProduct } from "../Redex/productSlice";


const UserEdit = () => {
    const { Formik } = formik;
    const navigate = useNavigate();
    const {users} = useSelector((state)=>state.userState);
    const {id} = useParams();
    const user =users.find((pr)=>pr.id ===Number(id))
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        productname: yup.string().required("please enter your productname").min(2, "please enter minimum 2 letters").max(50, "max char is 50 "),
        price: yup.number().required("please enter the price"),
        discription: yup.string().required("please enter the discription"),
        productphoto: yup.string().required("please add the  photo"),
        

    });

     const handleEditUser = (values)=>{
        
        values.id = Number(id);
        dispatch(editProduct(values));
        
         
        toast.success("product updated successfully");
        navigate("/admin/list-products")

       
     }
     
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={4} className="mt-4">
                    <Row>
                        <Col>
                            <h4>User edit </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Formik
                            validationSchema={schema}
                            onSubmit={handleEditUser}
                            initialValues={{
                                fullname:user?.fullname??'',
                                email:user?.email??"",
                                userid:user?.id??"",
                                

                            }}
                            
                            >
                                {({handleSubmit, handleChange,handleBlur, values, touched, errors})=>(    
                                     <Form noValidate onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>full name</Form.Label>
                                            <Form.Control 
                                            type="text" 
                                            name="fullname" 
                                            placeholder="Enter fullname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fullname}
                                            isValid={touched.fullname && ! errors?.fullname}
                                             isInvalid={touched.fullname && !! errors.fullname}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors?.fullname}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlEmail">
                                            <Form.Label>email</Form.Label>
                                            <Form.Control 
                                            type="email"
                                             name="email" 
                                             placeholder="Enter email" 
                                             onChange={handleChange}
                                             value={values.email}
                                              onBlur={handleBlur}
                                             isValid={touched.email && ! errors?.email}
                                              isInvalid={touched.email && !! errors.email}
                                             />
                                              <Form.Control.Feedback type="invalid">
                                                {errors?.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    {/* <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlPassword">
                                            <Form.Label>userid</Form.Label>
                                            <Form.Control
                                             as="id"
                                            name="userid" 
                                            placeholder="Enter userid" 
                                            onChange={handleChange}
                                             onBlur={handleBlur}
                                            value={values.userid }
                                                 isValid={touched.userid && ! errors?.userid}
                                                isInvalid={touched.userid && !! errors.userid}
                                           
                                            />
                                             <Form.Control.Feedback type="invalid">
                                                {errors?.userid}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row> */}
                                    {/* <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlProductphoto">
                                            <Form.Label>productphoto</Form.Label>
                                            <Form.Control
                                             type="text" 
                                            name="productphoto" 
                                            placeholder="add productphoto" 
                                            onChange={handleChange}
                                             onBlur={handleBlur}
                                            value={values.productphoto }
                                                 isValid={touched.productphoto && ! errors?.productphoto}
                                                isInvalid={touched.productphoto && !! errors.productphoto}
                                           
                                            />
                                             <Form.Control.Feedback type="invalid">
                                                {errors?.productphoto}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row> */}
                                    <Row>
                                        <Col className="d-grid">
                                            <Button type="submit">Register</Button>
                                        </Col>
                                    </Row>

                                </Form>)}

                            
                            </Formik>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default UserEdit;