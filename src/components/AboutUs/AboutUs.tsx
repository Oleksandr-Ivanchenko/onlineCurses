import './AboutUs.scss';
import ButtonLearn from '../../images/ButtonLearn.svg';
import Staffimg from '../../images/StaffPhoto.jpg';

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <div className="about-us__main">
        
        <div className="about-us__container">
          <h2 className="about-us__title">About Us</h2>
          <div className="about-us__learn-more">
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="about-us__learn-more-link"
            >
              <img src={ButtonLearn} alt="icon" className="about-us__icon" />
              <span>Learn more</span>
            </a>
          </div>
        </div>

        <div className="about-us__section-container">
          <div className="about-us__section about-us__section--1">
            <img src={Staffimg} alt="icon" className="about-us__image" />
          </div>

          <div className="about-us__section about-us__section--2">
            <h3 className="about-us__section__title">Hi, we’re Dickens Executive Coaching Academy</h3>
            <p className="about-us__section__p">
              Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor id proin rhoncus elit. Orci lacus pellentesque ultrices ut aliquet non fusce faucibus dictumst. Massa sit aliquam quam urna nam. Maecenas massa varius scelerisque pellentesque. Vestibulum ut rhoncus iaculis eleifend. Euismod cras et tortor at pellentesque duis cursus donec
            </p>
          </div>

          <div className="about-us__section about-us__section--3">
            <h3>5+</h3>
            <p>years on the educational market</p>
          </div>

          <div className="about-us__section about-us__section--4">
            <h3>1000+</h3>
            <p>successful graduates</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;