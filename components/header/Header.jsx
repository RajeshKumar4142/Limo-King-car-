import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Header() {
  return (
   <>
    <div className="hero mt-4">
      <Carousel controls={false} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://max-themes.net/demos/limoking/upload/slider-item-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="custom-caption slide-in-fwd-center ">
            <h3>The Best Limos</h3>
            <p>In New York</p>
            <h1>LIMO KING</h1>
           <h5>Learn More</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
          <img
            className="d-block w-100 h-100"
            src="https://max-themes.net/demos/limoking/upload/slider-item-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="custom-caption ">
            <h3 className='text_h3'> We Are #1 Limo Services</h3>
            <p className='text_p_caption'> Limos King offers superb limo service in New York and Manhatatan.  We are the most popular and has
            <br />been chosen by many important people. We also provide premier service to the airport, wedding,
            </p>
            <div className="button-group ">
              <a href="#departments" className="btn btn-primary">see our fleet</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://max-themes.net/demos/limoking/upload/slider-item-3.jpg"
            alt="Third slide"
          />
         {/* <Carousel.Caption className="custom-caption ">
            <h3>Bringing Health</h3>
            <p>to life for the whole family</p>
            <div className="button-group ">
              <a href="#departments" className="btn btn-primary">View Departments</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="header_2 text-center">
      <div className="py-5">
        <h1 className='text_header_h1  py-4'>We serve you like a king</h1>
        <hr className='hr' />
        <p className='header_p_2'>We offer you a super VIP experience in middle of New York.</p>
      </div>

    </div>
   </>
  );
}

export default Header;
