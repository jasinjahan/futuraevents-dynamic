import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
       <Image   src="https://th.bing.com/th/id/OIP.-NDkU9bbUCpffjbHShkWSwHaEo?w=312&h=194&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='https://www.syte.ai/wp-content/uploads/2022/07/cover.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='https://images.stockcake.com/public/0/0/f/00f9facd-131f-4020-a11c-c7fd20440f10_large/online-shopping-spree-stockcake.jpg'/>
       
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

export default Slides;