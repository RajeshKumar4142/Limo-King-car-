import Slider from "react-slick";
// import { client, client_1, client_2, client_3 } from "./import";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./brand.css";

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
   <>
    <div className="brand_1">
      <div className="brand-heading">
        <h2 className="brand_h1 py-5">OUR FLEET</h2>
        <hr className="hr_1" />
      </div>
      <div className="car_brand">
        <Slider {...settings}>
          <div className="brand-logo"> 
            <img  src= "https://max-themes.net/demos/limoking/upload/car-21.jpg"   alt="car logo"/>
            <h5 >HIRE THIS CAR</h5>
            
          </div>
          <div className="brand-logo">
            <img src= "https://max-themes.net/demos/limoking/upload/car-31.jpg" alt="car logo" />
            <h5>HIRE THIS CAR</h5>
          </div>
          <div className="brand-logo">
            <img src= "https://max-themes.net/demos/limoking/upload/car-41.jpg" alt="car logo" />
            <h5>HIRE THIS CAR</h5>
          </div>
          <div className="brand-logo">
            <img src= "https://max-themes.net/demos/limoking/upload/car-61.jpg" alt="car logo" />
            <h5>HIRE THIS CAR</h5>
          </div>
          <div className="brand-logo">
            <img src= "https://max-themes.net/demos/limoking/upload/car-71.jpg" alt="car logo" />
            <h5>HIRE THIS CAR</h5>
          </div>
          <div className="brand-logo">
            <img src= "https://max-themes.net/demos/limoking/upload/car-81.jpg" alt="car logo" />
            <h5>HIRE THIS CAR</h5>
          </div>
       
        </Slider>
      </div>
    </div>
    
    {/* brand_2 section */}

    <div className="brand_2_section py-5">
        <h3 className="brand_section_3">We promise, you will <br /> have the best experience</h3>
        <hr className="hr_brand" />

        <p className="brand_2_p">Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis <br /> parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu <br /> leo. Cras mattis consectetur purus sit amet fermentum.</p>
        <div className="buttton_section mt-4">
        <a href="/contact" className="btn btn-primary">BOOK NOW</a>
        </div>
    </div>
{/* brand_3_section */}

<div className="brand_3_section">
  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-4 gap-4">
    <h3 className="brand_3_section_h3">What about pricing?</h3>
    <p className="brand_3_section_p">Don’t worry. We provide very nice deals and the most competitive prices just for you!</p>
    <div className="button_section_brand_3">
      <a href="/contact" className="btn btn-primary">BOOK NOW</a>
    </div>
  </div>
</div>

   {/* brand_4_section */}

   <div className="brand_4_section text-center">
    <h3 className="brand_4_section_h3">Our Services</h3>
    <hr className="hr_brand_4" />
    <p className="brand_4_section_p ">Magna Risus Vestibulum Vulputate</p>

 


   </div>
   </>
  );
};

export default Brand;