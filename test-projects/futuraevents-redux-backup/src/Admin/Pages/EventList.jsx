import { Col, Container, Image, Row, Table } from "react-bootstrap"
import "./EventList.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const events= JSON.parse (localStorage.getItem("events")) || [];

const EventList = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h3>
                            Event Lists
                        </h3>
                    </Col>
                </Row>
                      {events.length <1 ? (
                <Row>
              
                    <Col>
                    <h4>
                        events not found 
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
                                    <th>Photo</th>
                                    <th>Event Name</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map ((events,i) => (

                            
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>
                                        <Image src={events?.eventphoto} alt="" className="image-size" />
                                    </td>
                                    <td>
                                        {events?.eventname} 
                                    </td>
                                    <td>{events?.eventprice}</td>
                                    <td>
                                        <FaEdit size={22} />
                                    </td>
                                    <td>
                                        <MdDelete size={22} />
                                    </td>
                                </tr>
                                    ))}
                               
                            </tbody>
                        </Table>
                    </Col>
                </Row>)}
            </Container>
            


        </>
    )
}

export default EventList;