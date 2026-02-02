import { Col, Container, Image, Row, Table } from "react-bootstrap";
import "./ListProducts.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




const products=JSON.parse(localStorage.getItem("products")) || [];

const ListProducts = () => {
    return (
        <Container className="mb-4">
            <Row >
                <Col>
                    <h4>List Products</h4>
                </Col>
            </Row>
            {products.length <1 ?(
            <Row>
                <Col>
                <h4>
                    prodct not found
                </h4>
               </Col>
               </Row>
               ) : (
                <Row>
                    <Col>
                 


                 <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Photo</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Edit</th>
                                <th>Delete</th>

                               

                            </tr>
                        </thead>


                        <tbody>
                            
                       
                       
                        {products.map ((product,i) => (
                            <tr key={i}>
                                <td>{i+1}</td>

                                <td>
                                    <Image src={product?.photo ?? null} className="product-image" alt="{ {product?.productname ?? null}"/>
                                
                                </td>
                                <td>
                                    {product?.productname ?? null}
                                </td>
                                <td>
                                    {product?.price ?? null}
                                </td>
                                <td>
                                    <FaEdit size={22} />
                                </td>
                                <td>
                                    <MdDelete size={2} />
                                </td>
                            </tr>
                             ) )}
                        
                          
                         

                        </tbody>
                    </Table>
                </Col>
            </Row>)}
        </Container>
    )
}

export default ListProducts;