import "./TestimonialsCard.scss"
import React from 'react';
import star from '../../images/Star.svg';
import userLogo from "../../images/UserLogo.svg";

export interface TestimonialsCardProps {
  name: string;
  id: string;
  role: string;
  image?: string;
  stars: number;
  description: string;
}
const Testimonials: React.FC<TestimonialsCardProps> = ({
  name,
  role,
  image,
  description,
  id,
  stars,
}) => (
  <div className="testimonials-card">
    <img className="testimonials-card__image" src={image || userLogo} alt={`User ${id}`} />
    <div className="testimonials-card__info">
      <h3 className="testimonials-card__name">{name}</h3>
      <h4 className="testimonials-card__role">{role}</h4>
      <div className="testimonials-card__stars">
        {Array.from({ length: stars }).map((_, index) => (
          <img key={index} className="testimonials-card__star" src={star} alt="star" />
        ))}
      </div>
      <p className="testimonials-card__text">{description}</p>
    </div>
  </div>
);


export default Testimonials;