import Carousel from 'react-bootstrap/Carousel';


function HomeCarousels () {
  return (
     <Carousel className='homecarousels'>
      <Carousel.Item>
     <img  className='w-100' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/292068110115717.5fe401ef72be2.png" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='w-100' src="https://image.shutterstock.com/image-vector/event-management-poster-template-layout-260nw-1484852009.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100' src="https://cdn1.vectorstock.com/i/1000x1000/44/15/event-management-concept-vector-30574415.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousels;