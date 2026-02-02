import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap";
import "./ListProducts.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/productSlice";
import { toast } from "react-toastify";
import { useState } from "react";






const ListProducts = () => {
    const [show, setShow] = useState(false);

    const [deleteProductId ,setDeleteProductId] = useState(null);

const {products}= useSelector((state)=> state.productState);

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
                                 <Link to={`/admin/edit-product/${product.id}`}> 
                                 
                                  <FaEdit size={22}/>   
                                  </Link>
                                </td>
                                <td>
                                    <MdDelete onClick={()=> handleProductDelete(product.id)} size={22} />
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



export default ListProducts;