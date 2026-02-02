import { Button, Col, Container, Form, Image, InputGroup, Modal, Row, Table } from "react-bootstrap"
import { MdOutlineDeleteOutline } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import "./WishList.css";
import { decrementItemQuantity, deleteEvent, incrementItemQuantity, removeWishItem } from "../redux/eventSlice";
import { toast } from "react-toastify";
import { useState } from "react";

function Wishlist() {
  
  
    const [show, setShow] = useState(false);
      const [deleteEventtId ,setDeleteEventId] = useState(null);
  const dispatch = useDispatch();


 const handleEventDelete =(eventId)=>{
        setDeleteEventId(eventId)
        setShow(true);}

  const { wishItems } = useSelector((state) => state.eventState)

  // console.log("wish------",wishItems);

    const totalPrice= wishItems.reduce((acc, item) => {
      acc += (item.eventprice * item.eventquantity);
      return acc;

    }, 0);
    
    const handleQuantityIncrement = (eventId)=>{
        dispatch(incrementItemQuantity(eventId));
    }

     const handleQuantityDecrement = (eventId)=>{
        dispatch(decrementItemQuantity(eventId));
    }
    
     const handleItemRemove = (eventId)=>{
        dispatch(removeWishItem(eventId));
        toast.success("Item removed from wishlist!");
     }



    console.log("totalprice--",totalPrice);
    
  

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
     
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-4">

            <h4>
              Wishlist
            </h4>
          </Col>

        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Event Photo</th>
                  <th>Event Name</th>
                  <th>Event price</th>
                  <th>About Events</th>
                  <th>Booking Numbers</th>
                  <th>Cancel Events</th>
                </tr>
              </thead>
              <tbody>
                {wishItems.map((item, i) => (


                  <tr key={i}>
                    <td>{i + 1}

                    </td>
                    <td> <Image src={item?.eventphoto} className="image-photosize1" /></td>
                    <td>{item?.eventname}</td>

                    <td>
                      {item?.eventprice ?? 0} x {item?.eventquantity ?? 1}= {item?.eventprice * item?.eventquantity} 
                       </td>

                    <td>{item?.eventdescription}</td>
                     <td>
                                        <InputGroup size="sm" className="mb-3">
                                            <Button variant="outline-secondary" id="button-addon1" onClick={()=>handleQuantityIncrement(item.id)}>
                                               +
                                            </Button>
                                            <Form.Control
                                                aria-label="small"
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={item?.eventquantity ?? 1}
                                                readOnly
                                            />
                                            <Button disabled={item?.eventquantity === 1? true : false} variant="outline-secondary" id="button-addon1" onClick={()=>handleQuantityDecrement(item.id)}>
                                                -
                                            </Button>
                                        </InputGroup>
                                      
                                    </td>
                    <td><MdOutlineDeleteOutline size={20} className="text-danger" onClick={()=>handleEventDelete(item.id)} /></td>
                  </tr>
                ))}
                <tr >
                  <td colSpan={7} className="text-end" >
                    <h4>
                      Total Price {totalPrice}
                    </h4>
                  </td>
                </tr>

              </tbody>
            </Table>
          </Col>
        </Row>
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


export default Wishlist
