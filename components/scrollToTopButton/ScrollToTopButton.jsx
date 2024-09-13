import  { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100 && window.innerWidth > 768) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => setIsScrolling(false), 1000); // Adjust the timeout based on the scroll speed
  };

  return (
    <>
      <div className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'} ${isScrolling ? 'disappear' : ''}`} onClick={scrollToTop}>
        <FaArrowCircleUp />
      </div>
    </>
  );
};

export default ScrollToTopButton;
