import './card.css';
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { GiRing } from "react-icons/gi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaGift } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
function Card() {
  return (
    <>
    <div className="card">
        <div className="container py-5">
            <div className="card_section d-flex flex-column flex-md-row align-items-center justify-content-between py-4 gap-4 py-5 ">
                <div className="col-md-4 ">
               
               <div className="d-flex gap-3">
               <FaMartiniGlassCitrus className='icon' /><h5>Night Parties</h5>
               </div>
               <div className="card_section_service">
               <p>Limos King offers superb lim service in New York and Manhatatan.  We are the most popular and has been chosen by many important people. We also provide premier service to the airport, wedding, casino, sport event, proms etc.</p>
               <a href="/service">read more</a>
               </div>
                </div>
                <div className="col-md-4 ">
                <div className="d-flex gap-3">
               <GiRing className='icon' /><h5>Weddings</h5>
               </div>
            
               <div className="card_section_service">
               <p>Limos King offers superb lim service in New York and Manhatatan.  We are the most popular and has been chosen by many important people. We also provide premier service to the airport, wedding, casino, sport event, proms etc.</p>
               <a href="/service">read more</a>
               </div>
                </div>
                <div className="col-md-4 ">
                <div className="d-flex gap-3">
               <HiMiniCurrencyDollar className='icon' /><h5>Casinos</h5>
               </div>
              
               <div className="card_section_service">
               <p>Limos King offers superb lim service in New York and Manhatatan.  We are the most popular and has been chosen by many important people. We also provide premier service to the airport, wedding, casino, sport event, proms etc.</p>
               <a href="/service">read more</a>
               </div>
                </div>
            </div>
            
            {/* card_section_2 */}

            <div className="card_section d-flex flex-column flex-md-row align-items-center justify-content-between  gap-4 ">
                <div className="col-md-4 ">
               
               <div className="d-flex gap-3">
               <FaGift className='icon' /><h5>Birthdays</h5>
               </div>
               <div className="card_section_service">
               <p>Limos King offers superb lim service in New York and Manhatatan.  We are the most popular and has been chosen by many important people. We also provide premier service to the airport, wedding, casino, sport event, proms etc.</p>
               <a href="/service">read more</a>
               </div>
                </div>
                <div className="col-md-4 ">
                <div className="d-flex gap-3">
               <GiLargeDress className='icon' /><h5>Proms</h5>
               </div>
            
               <div className="card_section_service">
               <p>Limos King offers superb lim service in New York and Manhatatan.  We are the most popular and has been chosen by many important people. We also provide premier service to the airport, wedding, casino, sport event, proms etc.</p>
               <a href="/service">read more</a>
               </div>
                </div>
                <div className="col-md-4 ">
                <div className="d-flex gap-3">
               <GiCommercialAirplane className='icon' /><h5>Airport Transfers</h5>
               </div>
              
               <div className="card_section_service">
               <p>Limos King offers superb lim service in New York and Manhatatan.  We are the most popular and has been chosen by many important people. We also provide premier service to the airport, wedding, casino, sport event, proms etc.</p>
               <a href="/service">read more</a>
               </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Card