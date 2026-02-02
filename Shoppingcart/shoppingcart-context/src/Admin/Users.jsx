import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { deleteProduct } from "../../redux/productSlice";
import { toast } from "react-toastify";
import { useState } from "react";






const Users = () => {
    const [show, setShow] = useState(false);

    const [deleteProductId ,setDeleteProductId] = useState(null);

const {users }= useSelector((state)=> state.userState);

 const dispatch = useDispatch();

const handleProductDelete=(productId)=>{
    setDeleteProductId(productId)
    setShow(true);
}
const handleClose = ()=> {
    setDeleteProductId(null);
    setShow(false);
    
}
const confirmProductDelete = ()=>{
        dispatch(deleteProduct(deleteProductId));
    toast.success("product deleted successfullyy ");
    setDeleteProductId(null);
    setShow(false);


}
//  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

    return (
        <Container className="mb-4">
            <Row className="m-2 ms-0">
                <Col>
                    <h4>Users Details</h4>
                </Col>
            </Row>
            {users.length <1 ?(
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
                                <th>Full Name </th>
                                <th>Email </th>
                                <th>ID</th>
                                <th>Status</th>
                                <th>Role</th>
                               
                                <th>Delete</th>

                               

                            </tr>
                        </thead>


                        <tbody>
                            
                       
                       
                        {users.map ((user,i) => (
                            <tr key={i}>
                                <td>{i+1}</td>

                              
                                <td>
                                    {user?.fullname ?? null}
                                </td>
                                <td>
                                    {user?.email ?? null}
                                </td>


                                <td>
                                    {user?.id}
                                </td>
                                 <td>{user?.status ? 'Active': 'Inactive'} </td>
                                <td>{user?.role ?? 'User'}</td>
                                {/* <td>
                                 <Link to={`/admin/useredit/${user.id}`}> 
                                 
                                  <FaEdit size={22}/>   
                                  </Link>
                                </td> */}
                                
                                <td>
                                    <MdDelete onClick={()=> handleProductDelete(user.id)} size={22} />
                                </td>
                               
                            </tr>
                             ) )}
                        
                        
                          
                
                         

                        </tbody>
                    </Table>
                </Col>
            </Row>)}

             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={confirmProductDelete}>
          Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
        
        
        
    )
    
    
}



export default Users;
