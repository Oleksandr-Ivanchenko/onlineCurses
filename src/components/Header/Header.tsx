import React, { useState } from 'react';
import './Header.scss';  
import Logo from '../../images/Logo.svg';
import IconChevron from '../../images/Icon-courses.svg';
import HeaderImage from '../../images/Img-header.jpg';
import AnchorLink from "../AnchorLink/AnchorLink";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    const dropdown = document.querySelector('.nav-courses');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
  <header className="header">
    <div className="header__top">
      <AnchorLink to="" className="header__logo-link">
          <img src={Logo} alt="Logo" className="header__logo-image" />
      </AnchorLink>
      <nav className="nav">
          <AnchorLink to="" className="nav__link">Home</AnchorLink>
          <div className="nav__courses">
            <AnchorLink to="courses" className="nav__link">Courses</AnchorLink>
            <img
              src={IconChevron}
              alt="dropdown"
              className={isDropdownOpen ? "nav__dropdown-icon nav__dropdown-icon--open" : "nav__dropdown-icon"}
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="nav__dropdown-menu">
                <AnchorLink to="course1" className="nav__dropdown-item">Level 1 (ACC Track) Experiential Executive Coaching Program</AnchorLink>
                <AnchorLink to="course2" className="nav__dropdown-item">Level 2 Coaching Program</AnchorLink>
              </div>
            )}
          </div>
          <AnchorLink to="about" className="nav__link">About</AnchorLink>
          <AnchorLink to="contact" className="nav__link">Contact Us</AnchorLink>
        </nav>

        <AnchorLink to="login" className="header__login-button"><span>Login</span></AnchorLink>
    </div>

    <div className="header__content">
      <div className="header__content-left">
        <h1 className="header__title">
          WELCOME TO <br /> DICKENS EXECUTIVE <br /> COACHING ACADEMY
        </h1>
        <p className="header__subtitle">Your resource of choice for coaching education</p>
        <AnchorLink to="courses" className="header__explore-button">Explore Courses</AnchorLink>
      </div>
      <div className="header__content-right">
        <img src={HeaderImage} alt="Header-image" className="header__image"/>
      </div>
    </div>
  </header>
  );
};

export default Header;