import { useState, useEffect } from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function BasicExample() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [navbarColor, setNavbarColor] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/solutions')) {
      setNavbarColor('navbar-solutions');
    } else if (location.pathname.includes('/Casestudies')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/medicalcoding')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/denial')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/about')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/contact')) {
      setNavbarColor('nav-Casestudies');
    } else {
      setNavbarColor('');
    }
  }, [location]);

  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    setIsScrolled(currentScrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownClick = () => {
    setDropdownClicked(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className={`${showNavbar ? 'navbar-visible' : 'navbar-hidden'} ${isScrolled ? 'navbar-scrolled' : ''} ${dropdownClicked ? 'dropdown-clicked' : ''} ${navbarColor}`} id='navbar'>
        <div className="navbar-top d-flex">
          <div className="col-md-4 -bottom">
           
          </div>
          <div className="col-md-4 ">
          <img src="https://max-themes.net/demos/limoking/images/logo.png" alt="" />
          </div>
          <div className="col-md-4 ">
            <div id="icon_gap">
              {/* <p>Email: info@beclinic.com <br /> <span className='span_nav'>For emergency cases: 800 123 45 67</span></p> */}
            
            </div>
          </div>
         
        </div>

        <Navbar expand="lg" className={` ${isScrolled ? 'navbar-scrolled' : ''} ${dropdownClicked ? 'dropdown-clicked' : ''}`} id='nav'>
          <Container>
            <Navbar.Brand href="#home">
              <div className="logo">
                {/* <img src="https://ld-wp73.template-help.com/wordpress/prod_13983/v3/wp-content/uploads/2021/12/logo.png" alt="Logo" /> */}
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto gap-4">
                <Nav.Link as={Link} to="/" onClick={() => setDropdownClicked(false)}>HOME</Nav.Link>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#solutions" role="button" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/page#action/3.1" onClick={handleDropdownClick}>ABOUT US</Link></li>
                    <li><Link className="dropdown-item" to="/contact#action/3.2" onClick={handleDropdownClick}>CONTACT</Link></li>
                   

                  </ul>
                </li>
                <Nav.Link as={Link} to="/fleet" onClick={() => setDropdownClicked(false)}>OUR FLEET</Nav.Link>

                <Nav.Link as={Link} to="/service" onClick={() => setDropdownClicked(false)}>SERVICE RATES</Nav.Link>
              
                <Nav.Link as={Link} to="/portfolio" onClick={() => setDropdownClicked(false)}>PORTFOLIO</Nav.Link>

            
              </Nav>
              <div className="nav_button">
                <button><a href="/contact"><FaSearch  /></a></button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default BasicExample;
