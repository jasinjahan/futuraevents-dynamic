import { Col, Container, Image, Row, Table } from "react-bootstrap"
import { MdOutlineDeleteOutline } from "react-icons/md"
import { useSelector } from "react-redux"

function Wishlist (){





const {wishItems}=useSelector((state)=>state.eventState)

   return(
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
        {wishItems.map((item , i )=> (

       
        <tr key={i}>
          <td>{i+1}

          </td>
          <td> <Image src={item?.eventphoto} className="image-photosize1" /></td>
          <td>{item?.eventname}</td>
          <td>{item?.eventprice}</td>
           <td>{item?.eventdescription}</td>
           <td>{item?.eventquantity}</td>
          <td><MdOutlineDeleteOutline size={20} className="text-danger" /></td>
        </tr>
         ))}
       
      </tbody>
    </Table>
         </Col>
      </Row>
    </Container>
    </>
   )
}

export default Wishlist