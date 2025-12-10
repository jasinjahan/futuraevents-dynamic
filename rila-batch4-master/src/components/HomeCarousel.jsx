import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./HomeCarousel.css";

function HomeCarousel() {
  return (
    <Carousel className='home-carousel'>
      <Carousel.Item>
        <Image className='w-100' src='https://www.shutterstock.com/image-vector/online-shopping-concept-perfect-landing-260nw-1654537690.jpg' alt='' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='w-100' src='https://cdn.vectorstock.com/i/500p/57/56/shopping-cart-banner-online-store-vector-42935756.jpg' alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='w-100' src='https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_incoming&w=740&q=80' alt='' />
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

export default HomeCarousel;