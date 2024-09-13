
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './car.css';

const Carbrand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div>
      {/* <div className="brand-heading">
        <h3 className="brand_h1">TRUSTED CLIENT</h3>
      </div> */}
      <div className="car_brand">
        <Slider {...settings}>
          <div className="brand-logo">
            <img src="https://max-themes.net/demos/limoking/upload/banner-21.png" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://max-themes.net/demos/limoking/upload/banner-11.png" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://max-themes.net/demos/limoking/upload/banner-31.png" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://max-themes.net/demos/limoking/upload/banner-51.png" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://max-themes.net/demos/limoking/upload/banner-41.png" alt="car logo" />
          </div>
       
        </Slider>
      </div>
    </div>
  );
};

export default Carbrand;