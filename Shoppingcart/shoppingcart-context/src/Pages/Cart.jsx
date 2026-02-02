import { Button, ButtonGroup, Col, Container, Form, Image, InputGroup, Modal, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css"
import { MdDelete } from "react-icons/md";
import { decrementItemQuantity, deleteProduct, incrementItemQuantity, removeCartItem } from "../redux/productSlice";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";



const Cart = () => {
       const [show, setShow] = useState(false);
    
        const [deleteProductId ,setDeleteProductId] = useState(null);
    
    const dispatch = useDispatch();

  const {cartItems} = useContext(ProductContext);

    const totalPrice = cartItems.reduce((acc, item) => {
        acc += (item.price * item.quantity);
        return acc;

    }, 0);

    const handleQuantityIncrement = (productId)=>{
        dispatch(incrementItemQuantity(productId));
    }

     const handleQuantityDecrement = (productId)=>{
        dispatch(decrementItemQuantity(productId));
    }
    
     const handleItemRemove = (productId)=>{
        dispatch(removeCartItem(productId));
        toast.success("Item removed from cart!");
     }



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


    return (
        <Container>
            <Row>
                <Col className="mt-4">
                    <h4>Cart Items</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Photo </th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Description</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <Image src={item.photo} className="image-photosize1" />


                                    </td>
                                    <td>
                                        {item.productname ?? 0}
                                    </td>
                                    <td>
                                        {item.price ?? 0} x {item?.quantity ?? 1} ={item?.price * item?.quantity}
                                    </td>

                                    <td>
                                        {item.description}
                                    </td>
                                    <td>
                                        <InputGroup size="sm" className="mb-3">
                                            <Button variant="outline-secondary" id="button-addon1" onClick={()=>handleQuantityIncrement(item.id)}>
                                               +
                                            </Button>
                                            <Form.Control
                                                aria-label="small"
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={item?.quantity ?? 1}
                                                readOnly
                                            />
                                            <Button disabled={item?.quantity === 1? true : false} variant="outline-secondary" id="button-addon1" onClick={()=>handleQuantityDecrement(item.id)}>
                                                -
                                            </Button>
                                        </InputGroup>
                                      
                                    </td>
                                    <td className="icon-align text-center">
                                        <MdDelete size={22} className="icon-align text-center text-danger" onClick={()=>handleProductDelete(item.id)} />
                                    </td>

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
export default Cart;