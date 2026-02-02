import Carousel from 'react-bootstrap/Carousel';



function HomeCarousels() {
  return (
    <Carousel className='homecarousels'>
      <Carousel.Item>
     <img  className='w-100' src="https://www.creativefabrica.com/wp-content/uploads/2021/04/26/Creative-Fashion-Sale-Banner-Graphics-11345601-1.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='w-100' src="https://www.creativefabrica.com/wp-content/uploads/2022/03/30/Fashion-Sale-Facebook-Cover-Graphics-28088800-1.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100' src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Online-Shopping-AD-Banner-Design-in-Photoshop-1180x664.jpg" alt="" />
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