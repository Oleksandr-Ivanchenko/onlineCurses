import React, { useState } from 'react';

import './LeadMagnet.scss';

const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="lead-magnet" id="contact">
      <div className="lead-magnet__container">
        <h2 className="lead-magnet__title">
          companies, universities, directors and presidents
        </h2>
        <p className="lead-magnet__description">
          if you'd like to learn more information about our work with large organizations, let's schedule a call.
        </p>
      </div>

      <div className="lead-magnet__form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="name"></label>
          <input
            placeholder="Name"
            className="form__input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label className="form__label" htmlFor="email"></label>
          <input
            placeholder="Email"
            className="form__input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <button className="form__button" type="submit">
            Schedule a call
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadMagnet;