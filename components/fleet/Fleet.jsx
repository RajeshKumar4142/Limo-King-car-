import './fleet.css';
import { useState } from 'react';

function Fleet() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="brand_car_section">
      <div className="fleet text-center">
        <h1 className='mt-3'>Our Fleet / 2 Columns</h1>
        <hr className='hr' />
        <p className='header_p_2'>We offer you a super VIP experience in the middle of New York.</p>
      </div>

      <div className="car_brand_new text-center">
        <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>All</button>
        <button className={activeCategory === 'partyBus' ? 'active' : ''} onClick={() => setActiveCategory('partyBus')}>Party Bus</button>
        <button className={activeCategory === 'sedan' ? 'active' : ''} onClick={() => setActiveCategory('sedan')}>Sedan</button>
        <button className={activeCategory === 'stretchLimo' ? 'active' : ''} onClick={() => setActiveCategory('stretchLimo')}>Stretch Limo</button>
        <button className={activeCategory === 'suvLimo' ? 'active' : ''} onClick={() => setActiveCategory('suvLimo')}>SUV Limo</button>
      </div>

      <div className="car_display text-center">
        {activeCategory === 'all' && (
          <div className="car_grid">
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Black Lincoln MKT" />
              <h3>BLACK LINCOLN MKT</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$89/HOUR</p>
            </div>
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-21.jpg" alt="Black Lincoln Sedan" />
              <h3>BLACK LINCOLN SEDAN</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$59/HOUR</p>
            </div>
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Mercedes Grand Sedan" />
              <h3>MERCEDES GRAND SEDAN</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$69/HOUR</p>
            </div>
            
          </div>
        )}
          {activeCategory === 'all' && (
          <div className="car_grid">
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-41.jpg" alt="Black Lincoln MKT" />
              <h3>Black Cadillac Sedan</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$89/HOUR</p>
            </div>
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-51.jpg" alt="Black Lincoln Sedan" />
              <h3>Cadillac Escalade Limo</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$59/HOUR</p>
            </div>
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-61.jpg" alt="Mercedes Grand Sedan" />
              <h3>Lincoln Stretch Limo</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$69/HOUR</p>
            </div>
            
          </div>
        )}
          {activeCategory === 'all' && (
          <div className="car_grid">
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-71.jpg" alt="Black Lincoln MKT" />
              <h3>Hummer Strecth Limo</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$89/HOUR</p>
            </div>
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-81.jpg" alt="Black Lincoln Sedan" />
              <h3>Ford Party Bus Limo</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$59/HOUR</p>
            </div>
            <div className="car_item">
              <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Mercedes Grand Sedan" />
              <h3>MERCEDES GRAND SEDAN</h3>
              <ul>
                <li>4 Passengers</li>
                <li>Black Leather Interior</li>
                <li>Heated Seats</li>
                <li>$3.00 Per Hour Fuel Surcharge</li>
              </ul>
              <button className="view_details">VIEW DETAILS</button>
              <p className="price">$69/HOUR</p>
            </div>
            
          </div>
        )}

        {activeCategory === 'partyBus' && (
         <div className="car_grid">
         <div className="car_item">
           <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Black Lincoln MKT" />
           <h3>BLACK LINCOLN MKT</h3>
           <ul>
             <li>4 Passengers</li>
             <li>Black Leather Interior</li>
             <li>Heated Seats</li>
             <li>$3.00 Per Hour Fuel Surcharge</li>
           </ul>
           <button className="view_details">VIEW DETAILS</button>
           <p className="price">$89/HOUR</p>
         </div>
         <div className="car_item">
           <img src="https://max-themes.net/demos/limoking/upload/car-51.jpg" alt="Black Lincoln Sedan" />
           <h3>BLACK LINCOLN SEDAN</h3>
           <ul>
             <li>4 Passengers</li>
             <li>Black Leather Interior</li>
             <li>Heated Seats</li>
             <li>$3.00 Per Hour Fuel Surcharge</li>
           </ul>
           <button className="view_details">VIEW DETAILS</button>
           <p className="price">$59/HOUR</p>
         </div>
         <div className="car_item">
           <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Mercedes Grand Sedan" />
           <h3>MERCEDES GRAND SEDAN</h3>
           <ul>
             <li>4 Passengers</li>
             <li>Black Leather Interior</li>
             <li>Heated Seats</li>
             <li>$3.00 Per Hour Fuel Surcharge</li>
           </ul>
           <button className="view_details">VIEW DETAILS</button>
           <p className="price">$69/HOUR</p>
         </div>
         
       </div>
        )}
        {activeCategory === 'sedan' && (
          <div className="car_grid">
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-21.jpg" alt="Black Lincoln MKT" />
            <h3>BLACK LINCOLN MKT</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$89/HOUR</p>
          </div>
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-61.jpg" alt="Black Lincoln Sedan" />
            <h3>BLACK LINCOLN SEDAN</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$59/HOUR</p>
          </div>
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Mercedes Grand Sedan" />
            <h3>MERCEDES GRAND SEDAN</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$69/HOUR</p>
          </div>
          
        </div>
        )}
        {activeCategory === 'stretchLimo' && (
          <div className="car_grid">
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-31.jpg" alt="Black Lincoln MKT" />
            <h3>BLACK LINCOLN MKT</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$89/HOUR</p>
          </div>
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-71.jpg" alt="Black Lincoln Sedan" />
            <h3>BLACK LINCOLN SEDAN</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$59/HOUR</p>
          </div>
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Mercedes Grand Sedan" />
            <h3>MERCEDES GRAND SEDAN</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$69/HOUR</p>
          </div>
          
        </div>
        )}
        {activeCategory === 'suvLimo' && (
          <div className="car_grid">
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Black Lincoln MKT" />
            <h3>BLACK LINCOLN MKT</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$89/HOUR</p>
          </div>
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-21.jpg" alt="Black Lincoln Sedan" />
            <h3>BLACK LINCOLN SEDAN</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$59/HOUR</p>
          </div>
          <div className="car_item">
            <img src="https://max-themes.net/demos/limoking/upload/car-11.jpg" alt="Mercedes Grand Sedan" />
            <h3>MERCEDES GRAND SEDAN</h3>
            <ul>
              <li>4 Passengers</li>
              <li>Black Leather Interior</li>
              <li>Heated Seats</li>
              <li>$3.00 Per Hour Fuel Surcharge</li>
            </ul>
            <button className="view_details">VIEW DETAILS</button>
            <p className="price">$69/HOUR</p>
          </div>
          
        </div>
        )}
      </div>
      <div className="brand_2_section py-5">
        <h3 className="brand_section_3">We promise, you will <br /> have the best experience</h3>
        <hr className="hr_brand" />

        <p className="brand_2_p">Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis <br /> parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu <br /> leo. Cras mattis consectetur purus sit amet fermentum.</p>
        <div className="buttton_section mt-4">
        <a href="#departments" className="btn btn-primary">BOOK NOW</a>
        </div>
    </div>
    </div>
  );
}

export default Fleet;
