import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap"
// import "./EventList.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { deleteEvent } from "../../redux/eventSlice";
import { useState } from "react";


// const events= JSON.parse (localStorage.getItem("events")) || [];

const Users = () => {
    const [show, setShow] = useState(false);
    const [deleteEventtId ,setDeleteEventId] = useState(null);
    const {users} = useSelector((state)=>state.userState);
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
                            User Lists
                        </h3>
                    </Col>
                </Row>
                      {users.length <1 ? (
                <Row>
              
                    <Col>
                    <h4>
                       user not found 
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
                                    
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map ((user,i) => (

                            
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    
                                    <td>
                                        {user?.fullname} 
                                    </td>
                                    <td>{user?.email}</td>
                                    <td>
                                        <Link to={`/admin/edit-event/${user.id}`}  >
                                          <FaEdit  size={22} />
                                        </Link>
                                      
                                    </td>
                                    <td>
                                        <MdDelete onClick={()=>handleEventDelete(users.id)} size={22} />
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

export default Users;