import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap"
import "./EventList.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteEvent } from "../../redux/eventSlice";
import { useState } from "react";


// const events= JSON.parse (localStorage.getItem("events")) || [];

const EventList = () => {
    const [show, setShow] = useState(false);
    const [deleteEventtId ,setDeleteEventId] = useState(null);
    const {events} = useSelector((state)=>state.eventState);
const dispatch = useDispatch();





    const handleEventDelete =(eventId)=>{
        setDeleteEventId(eventId)
        setShow(true);
    //    dispatch(deleteEvent(eventId));
  
      
    }

     const handleClose = () =>{
        setDeleteEventId(null);
        setShow(false);
     }

     const confirmEventDelete =()=>{
        dispatch(deleteEvent(deleteEventtId));
             toast.success("Product deleted successfully")
             setDeleteEventId(null);
             setShow(false);

     }
     
 
 
    //    const handleShow = () => setShow(true);

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
                                        <Link to={`/admin/edit-event/${events.id}`}  >
                                          <FaEdit  size={22} />
                                        </Link>
                                      
                                    </td>
                                    <td>
                                        <MdDelete onClick={()=>handleEventDelete(events.id)} size={22} />
                                    </td>
                                </tr>
                                    ))}
                               
                            </tbody>
                        </Table>
                    </Col>
                </Row>)}
                
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel event </Modal.Title>
        </Modal.Header>
        <Modal.Body> are you sure that you want to cancel the event</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={confirmEventDelete}>
          Delete
          </Button>
        </Modal.Footer>
      </Modal>
            </Container>
            


        </>
    )
}

export default EventList;