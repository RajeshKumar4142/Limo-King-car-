import './footer.css';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
function Footer() {
  return (
    <>
    <div className="footer">
      <div className="container d-flex flex-column flex-md-row  justify-content-between py-4 gap-4 py-5">
        <div className="col-md-3 ">
         <h5>about us</h5>
         <p className='py-4'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta.</p>
         <div className="image_section">
         <img src="https://max-themes.net/demos/limoking/upload/logo.png" alt="" className='image-fluid' />
         </div>
        </div>
        <div className="col-md-3 ">
        <h5>Contact Info</h5>
        <p className='py-4'>Address: 184 Main Collins Street West Victoria 8007</p>
        <div className="p d-flex gap-3">
        <p className='py-0'><IoIosCall className='' /></p>
        <p className='py-0 '> +1800-222-3333</p>
        </div>
        <div className="p d-flex gap-3">
        <p className='py-0'><IoMail /></p>
        <p className='py-0'>book@limokingtheme.com</p>
        </div>
        </div>
        <div className="col-md-3 ">
        <h5>Recent Posts</h5>
         <p className='mt-5'>Sem Porta Mollis Parturi <hr /></p> 
         <p className=''>Nullam Lorem Mattis Purus<hr /></p>
         <p className=''>Nibh Sem Sit Ullamcorper<hr /></p>
         <p className=''>Donec luctus imperdiet<hr /></p>
        </div>
        <div className="col-md-3 ">
        <h5>Recent Works</h5>
          <div className="image_footer d-flex gap-3">
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_770756561-150x150.jpg" alt="" className='image-fluid' />
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_1058269641-150x150.jpg" alt="" className='image-fluid' />
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_1837970511-150x150.jpg" alt="" className='image-fluid' />
          </div>
          <div className="image_footer d-flex gap-3 mt-2">
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_716302901-150x150.jpg" alt="" className='image-fluid' />
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_2580348261-150x150.jpg" alt="" className='image-fluid' />
          <img src="https://max-themes.net/demos/limoking/upload/shutterstock_1427849831-150x150.jpg" alt="" className='image-fluid' />
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container d-flex justify-content-center py-3">
        <p>�� 2024 Limo King. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer