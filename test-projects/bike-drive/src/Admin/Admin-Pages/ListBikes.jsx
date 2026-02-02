import { Col, Container, Image, Row, Table } from "react-bootstrap";
// import "./ListProducts.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




const bikes=JSON.parse(localStorage.getItem("bikes")) || [];

const ListBikes = () => {
    return (
        <Container className="mb-4">
            <Row >
                <Col>
                    <h4>List Bikes</h4>
                </Col>
            </Row>
            {bikes.length <1 ?(
            <Row>
                <Col>
                <h4>
                   bikes not found
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
                                <th>bikes Photo</th>
                                <th>bikes Name</th>
                                <th>bikes Price</th>
                                <th>Edit</th>
                                <th>Delete</th>

                               

                            </tr>
                        </thead>


                        <tbody>
                            
                       
                       
                        {bikes.map ((bike,i) => (
                            <tr key={i}>
                                <td>{i+1}</td>

                                <td>
                                    <Image src={bike?.photo ?? null} className="bike-image" alt="{ {bike?.bikename ?? null}"/>
                                
                                </td>
                                <td>
                                    {bike?.bikename ?? null}
                                </td>
                                <td>
                                    {bike?.price ?? null}
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

export default ListBikes;