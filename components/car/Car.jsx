import './car.css';
import Carbrand from './carbrand';

function Car() {

  let time = new Date();

  return (
   <>
    <div className="car text-center">
      <video 
        className="car-video" 
        src="https://max-themes.net/demos/limoking/upload/service-video-bg-n.webm" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
      <h3>or anywhere you need us to take</h3>
      <p> Not only taking to night parties, weddings, casinos, birthdays but <br />
      we also take you to anywhere you want to go. </p>
      <h4> Call Now (1)-212-333-4343</h4>
      <p>this is current time {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
      <button className="btn btn-primary mt-4"><a href="/contact">Book Now</a></button>
    </div>

    <div className="car_2">
        <div className="container">
           <Carbrand/>
        </div>
    </div>
   </>
  );
}

export default Car;
