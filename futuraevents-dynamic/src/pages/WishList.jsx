import { Col, Container, Row, Table } from "react-bootstrap"

function Wishlist (){
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
          <th>Planned Events</th>
          <th>Cancel Events</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>photo</td>
          <td>Sample 01</td>
          <td>Event 01</td>
           <td>1</td>
          <td>Cancel</td>
        </tr>
       
      </tbody>
    </Table>
         </Col>
      </Row>
    </Container>
    </>
   )
}

export default Wishlist