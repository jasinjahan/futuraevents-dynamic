import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "./redux/userSlice";

function Register() {
  const { Formik } = formik;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Please enter your name")
      .min(2, "Minimum 2 characters")
      .max(20, "Maximum 20 characters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email address"),
    password: yup.string().required("Please enter your password"),
  });

  const handleRegisterForSubmit = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    };
    dispatch(userRegister(newUser));

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("User Registered Successfully!");
    navigate("/login");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4} className="mt-4">
          <h4>Register</h4>

          <Formik
            validationSchema={schema}
            initialValues={{
              fullname: "",
              email: "",
              password: "",
            }}
            onSubmit={handleRegisterForSubmit}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    placeholder="Enter full name"
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.fullname && !!errors.fullname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullname}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="w-100">
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

