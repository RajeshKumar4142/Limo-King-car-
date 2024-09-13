import { useState } from 'react';
import './contact.css';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  // State for form inputs and error messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form inputs
  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="conatact_map mt-5">
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13722.311912505842!2d76.6829928!3d30.702148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1724828871697!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contact_2 ">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between py-4 gap-4 py-5">
            <div className="col-md-7">
              <h3>Please fulfil the form below.</h3>
              {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={`form-control mt-4 ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group mt-4">
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    name="message"
                    rows="10"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                <button type="submit" className="submit_button btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-5 mt-3">
              <h3>Before Contacting Us</h3>
              <p className='py-3 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <h3>Contact Information</h3>
              <div className="p d-flex gap-3">
                <p className='py-0'><IoIosCall /></p>
                <p className='py-0'> +1800-222-3333</p>
              </div>
              <div className="p d-flex gap-3">
                <p className='py-0'><IoMail /></p>
                <p className='py-0'>book@limokingtheme.com</p>
              </div>
              <div className="p d-flex gap-3">
                <p className='py-0'><IoMdTime /></p>
                <p className='py-0'> Everyday 9:00-17:00</p>
              </div>
              <h3 className='py-4'>Social Media</h3>
              <div className="d-flex gap-3">
                <a href="#"><FaFacebook className='icon_face' /></a>
                <a href="#"><IoLogoWhatsapp className='icon_whats' /></a>
                <a href="#"><FaLinkedin className='icon_link' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand_2_section py-5">
        <h3 className="brand_section_3">We promise, you will <br /> have the best experience</h3>
        <hr className="hr_brand" />
        <p className="brand_2_p">Sed posuere consectetur est at lobortis.</p>
        <div className="buttton_section mt-4">
          <a href="#departments" className="btn btn-primary">BOOK NOW</a>
        </div>
      </div>
    </>
  );
}

export default Contact;
