import './page.css';
import CountUp from 'react-countup';
import Test from './test.jsx';

function Page() {
  return (
    <>
      <div className="page">
        <div className="text-center page_h1">
          <h1 className='mt-5 py-4'>About Limo King</h1>
          <hr className='hr mt-4' />
          <p className='header_p_2 mt-3 py-3'>We are the most popular limousine service in New York.</p>
        </div>
      </div>
      <div className="page_2">
        <div className="container d-flex flex-column flex-md-row justify-content-between py-4 gap-4 py-5">
          <div className="col-md-6 py-5">
            <img src="https://max-themes.net/demos/limoking/upload/about-car1.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <h2>Ullamcorper Parturient Vulputate Ultricies Malesuada</h2>
            <p className='py-4'>Limos King offers superb lim service in New York and Manhatatan.  We are the most popular and has been chosen by many important people. We also provide premier service to the airport, wedding, casino, sport event, proms etc. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.  Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          </div>
        </div>
      </div>
      <div className="page_3">
        <hr className="hr_brand_4" />
        <div className="counter-section mt-5 d-flex gap-5 justify-content-center">
          <div className="counter-item">
            <CountUp end={9000} duration={5} suffix="+" className="count" />
            <h2>HAPPY CUSTOMERS</h2>
          </div>
          <div className="counter-item">
            <CountUp end={12} duration={5} suffix="+" className="count" />
            <h2>LUXURY LIMOS</h2>
          </div>
          <div className="counter-item">
            <CountUp end={900000} duration={5} suffix="+" className="count" />
            <h2>MILES</h2>
          </div>
          <div className="counter-item">
            <CountUp end={30} duration={5} suffix="+" className="count" />
            <h2>QUALIFIED CHAUFFUERS</h2>
          </div>
        </div>
      </div>
      <div className="page_4 py-5">
        <h3 className="page_4_h3">Only Qualified Chauffeurs</h3>
        <hr className="hr_brand" />

        <p className="page_4_p">Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, <br /> nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit <br />amet fermentu</p>
        <div className="buttton_section mt-4">
        <a href="#departments" className="btn btn-primary">BOOK NOW</a>
        </div>
    </div>
    <div className="brand_3_section">
  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-4 gap-4">
    <h3 className="brand_3_section_h3">What about pricing?</h3>
    <p className="brand_3_section_p">Don’t worry. We provide very nice deals and the most competitive prices just for you!</p>
    <div className="button_section_brand_3">
      <a href="#departments" className="btn btn-primary">BOOK NOW</a>
    </div>
  </div>
</div>
   <Test/>
    </>
  );
}

export default Page;
