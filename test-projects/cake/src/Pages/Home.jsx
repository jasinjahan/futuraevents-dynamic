import Carousel from 'react-bootstrap/Carousel';


function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='w-100' src="https://tse4.mm.bing.net/th/id/OIP.gnrSqJlBGz_vhyk5J9SfxgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3 " alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  className='w-100' src="https://tse4.mm.bing.net/th/id/OIP.gnrSqJlBGz_vhyk5J9SfxgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='w-100' src="https://tse4.mm.bing.net/th/id/OIP.gnrSqJlBGz_vhyk5J9SfxgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
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

export default Home;