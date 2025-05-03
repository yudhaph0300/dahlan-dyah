// file: CarouselComponent
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={true} showStatus={false}>
      <div>
        <img src="/images/carousel/1.jpg" alt="Prewedding 1" />
      </div>
      <div>
        <img src="/images/carousel/2.jpg" alt="Prewedding 2" />
      </div>
      <div>
        <img src="/images/carousel/3.jpg" alt="Prewedding 3" />
      </div>
      <div>
        <img src="/images/carousel/4.jpg" alt="Prewedding 4" />
      </div>
      <div>
        <img src="/images/carousel/5.jpg" alt="Prewedding 5" />
      </div>
      <div>
        <img src="/images/carousel/6.jpg" alt="Prewedding 6" />
      </div>
      <div>
        <img src="/images/carousel/7.jpg" alt="Prewedding 7" />
      </div>
      <div>
        <img src="/images/carousel/8.jpg" alt="Prewedding 8" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
