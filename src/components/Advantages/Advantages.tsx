import React from 'react';
import './Advatages.scss';
import IconSectionRoket from '../../images/roket-icon.svg';
import IconSectionBulp from '../../images/bulb-icon.svg';
import IconSectionBook from '../../images/book-icon.svg';

const Advantages: React.FC = () => {
  return (
    <div className="advantages">
    <div className="advantages__main">
      
      <div className="advantages__title-container">
        <h2 className="advantages__title">Advantages</h2>
      </div>
  
      <div className="advantages__section-container">
        <div className="advantages__section advantages__section--1">
          <img src={IconSectionRoket} alt="Roket" className="advantages__icon" />
          <h3 className="advantages__section-title">launch your coaching <br />career</h3>
          <div className="advantages__text">A comprehensive course track to ICF <br />credentialing</div>
        </div>
          
        <div className="advantages__section advantages__section--2">
          <img src={IconSectionBulp} alt="Roket" className="advantages__icon" />
          <h3 className="advantages__section-title">coaching in the workplace</h3>
          <div className="advantages__text">Serve as a thought leader within your <br />organization</div>
        </div>
          
        <div className="advantages__section advantages__section--3">
          <img src={IconSectionBook} alt="Roket" className="advantages__icon" />
          <h3 className="advantages__section-title">continuing coaching <br />education</h3>
          <div className="advantages__text">Beginner or a seasoned pro, you'll find a <br />course right for you</div>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default Advantages;

