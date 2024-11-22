import Logo from '../../images/Logo.svg';
import './Footer.scss';
import AnchorLink from "../AnchorLink/AnchorLink";

const Footer: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
      <img 
        src={Logo} 
        alt="Logo" 
        className="footer__logo" 
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
        <p className="footer__text">© 2024 Dickens Consulting Group, LLC</p>
        <div className="footer__buttons">
          <AnchorLink to="course" className="footer__buttons__link">
            Course
          </AnchorLink>
          <AnchorLink to="about" className="footer__buttons__link">
            About
          </AnchorLink>
          <AnchorLink to="/contact" className="footer__buttons__link">
            Contact
          </AnchorLink>
        </div>
      </div>
  </footer>
  );
};

export default Footer;