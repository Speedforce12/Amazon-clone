import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full bottom-0 z-20 h-32 bg-gradient-to-t from-gray-100 to-transparent' />
      <Carousel
        autoPlay
        showStatus={false}
        infiniteLoop
        showArrows
        showIndicators={false}
        stopOnHover
        interval={6000}
        showThumbs={false}
        useKeyboardArrows> 
        <div>
          <img alt='slider image' src={"assests/slide1.jpg"} />
        </div>
        <div>
          <img alt='slider image' src='assests/slide2.jpg' />
        </div>
        <div>
          <img alt='slider image' src='assests/slide3.jpg' />
        </div>

        <div>
          <img alt='slider image' src='assests/slide4.jpg' />
        </div>
        <div>
          <img alt='slider image' src='assests/slide5.jpg' />
        </div>
        <div>
          <img alt='slider image' src='assests/slide6.jpg' />
        </div>
        <div>
          <img alt='slider image' src='assests/slide7.jpg' />
        </div>
        <div>
          <img alt='slider image' src='assests/slide8.jpg' />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
