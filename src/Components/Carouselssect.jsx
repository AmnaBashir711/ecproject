import Carousel from 'react-bootstrap/Carousel';

function Carouselssect() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100"
src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWNzfGVufDB8fDB8fHww&w=1000&q=80"          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cosmetics</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, nesciunt! Fuga distinctio consequatur unde accusamus cupiditate perferendis quibusdam, reiciendis saepe quas officiis expedita incidunt eos sunt repudiandae iste voluptas deleniti assumenda culpa voluptates tenetur!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Laptops</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt accusamus praesentium expedita veniam placeat animi provident nam ex, pariatur laboriosam assumenda unde exercitationem aut dolore saepe qui sit deleniti totam aperiam eligendi magni?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
src="https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?cs=srgb&dl=pexels-victoria-rain-1094084.jpg&fm=jpg"          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Kids Apparel</h3>
          <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eius aperiam a quod officia aut architecto, vitae harum dolorum ad velit. Veritatis non nemo quibusdam voluptate at excepturi odio numquam! Nesciunt eaque fugit temporibus.          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselssect;