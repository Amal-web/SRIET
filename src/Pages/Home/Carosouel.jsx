import Carousel from "react-bootstrap/Carousel";
import img1 from "../../photos/Home/11.jpg"
import img2 from "../../photos/Home/22.jpg";
import img3 from "../../photos/Home/33.jpg";


function UncontrolledExample() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="image-body">
        <img className="d-block caroseul-image" src={img1} alt="First slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="image-body">
        <img
          className="d-block caroseul-image "
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="image-body">
        <img className="d-block caroseul-image" src={img3} alt="Third slide" />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
