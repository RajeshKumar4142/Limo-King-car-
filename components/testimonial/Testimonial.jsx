import './testimonial.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => { // Corrected the function definition
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial">
      <div className="container d-flex flex-column flex-md-row justify-content-between py-4 gap-4 py-5">
        <div className="col-md-4 ">
          <h3>Video Tour</h3>
          <div className="video_section">
            <video 
              className="video_section" 
              src="https://max-themes.net/demos/limoking/upload/service-video-bg-n.webm" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
            <a href="#">Watch our fleet in this video</a>
          </div>
        </div>

        <div className="col-md-4 ">
        <h3>Testimonial</h3>
          <div className="car_brand_test">
            <Slider {...settings}>
              <div className="brand-logo  ">
               <div className="d-flex gap-4  ">
               <div className="test_icon"><FaQuoteLeft /></div>
                <div className="test_p py-4 text-start ">
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabit,ur blandit tempus porttitor. Praesent commodo cursus magna.</p>
                </div>
               </div>
              <div className="image_section_brand d-flex gap-4 ">
                <img src="https://max-themes.net/demos/limoking/upload/testimonial-s-21-150x150.jpg" alt="" />
                <div className="text_brand  text-start">
                <h6>Cras justo</h6>
                <p>CEO, The Klise</p>
                </div>
                
              </div>
             
                </div>
                <div className="brand-logo  ">
               <div className="d-flex gap-4  ">
               <div className="test_icon"><FaQuoteLeft /></div>
                <div className="test_p py-4 text-start ">
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabit,ur blandit tempus porttitor. Praesent commodo cursus magna.</p>
                </div>
               </div>
              <div className="image_section_brand d-flex gap-4 ">
                <img src="https://max-themes.net/demos/limoking/upload/testimonial-s-21-150x150.jpg" alt="" />
                <div className="text_brand  text-start">
                <h6>Cras justo</h6>
                <p>CEO, The Klise</p>
                </div>
                
              </div>
             
                </div>
                <div className="brand-logo  ">
               <div className="d-flex gap-4  ">
               <div className="test_icon"><FaQuoteLeft /></div>
                <div className="test_p py-4 text-start ">
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabit,ur blandit tempus porttitor. Praesent commodo cursus magna.</p>
                </div>
               </div>
              <div className="image_section_brand d-flex gap-4 ">
                <img src="https://max-themes.net/demos/limoking/upload/testimonial-s-21-150x150.jpg" alt="" />
                <div className="text_brand  text-start">
                <h6>Cras justo</h6>
                <p>CEO, The Klise</p>
                </div>
                
              </div>
             
                </div>
                <div className="brand-logo  ">
               <div className="d-flex gap-4  ">
               <div className="test_icon"><FaQuoteLeft /></div>
                <div className="test_p py-4 text-start ">
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabit,ur blandit tempus porttitor. Praesent commodo cursus magna.</p>
                </div>
               </div>
              <div className="image_section_brand d-flex gap-4 ">
                <img src="https://max-themes.net/demos/limoking/upload/testimonial-s-21-150x150.jpg" alt="" />
                <div className="text_brand  text-start">
                <h6>Cras justo</h6>
                <p>CEO, The Klise</p>
                </div>
                
              </div>
             
                </div>
                <div className="brand-logo  ">
               <div className="d-flex gap-4  ">
               <div className="test_icon"><FaQuoteLeft /></div>
                <div className="test_p py-4 text-start ">
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabit,ur blandit tempus porttitor. Praesent commodo cursus magna.</p>
                </div>
               </div>
              <div className="image_section_brand d-flex gap-4 ">
                <img src="https://max-themes.net/demos/limoking/upload/testimonial-s-21-150x150.jpg" alt="" />
                <div className="text_brand  text-start">
                <h6>Cras justo</h6>
                <p>CEO, The Klise</p>
                </div>
                
              </div>
             
                </div>
            </Slider>
          </div>
        </div>

        <div className="col-md-4 ">
        <h3>Recent News</h3>
        <div className="brand_news d-flex gap-3">
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_1579359681-400x400.jpg" alt="" />         
          <h6>Sem Porta Mollis Parturi<br />
          <div className="mt-2 brand_p_test"><p>21 Mar 2014 /By John Doe</p></div></h6>
        </div>
        <div className="brand_news d-flex gap-3 mt-4">
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_1746421911-400x400.jpg" alt="" />         
          <h6>Nullam Lorem Mattis Purus <br />
          <div className="mt-2 brand_p_test"><p>21 Mar 2014 /By John Doe</p></div></h6>
        </div>
        <div className="brand_news d-flex gap-3 mt-4">
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_1417049411-400x400.jpg" alt="" />         
          <h6>Nibh Sem Sit Ullamcorper<br />
          <div className="mt-2 brand_p_test"><p>21 Mar 2014 /By John Doe</p></div></h6>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
