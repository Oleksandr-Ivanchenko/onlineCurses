import "./Testimonials.scss";
import React, { useState } from "react";
import bPrev from "../../images/ButtonPrev.svg";
import bNext from "../../images/ButtonNext.svg";
import staffPhfoto1 from "../../images/staffPhoto1.jpg";
import staffPhfoto2 from "../../images/staffPhoto2.jpg";
import TestimonialsCard, { TestimonialsCardProps } from "../TestimonialsCard/TestimonialsCard";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsInfo: TestimonialsCardProps[] = [
    {
      id: "1",
      name: "Name",
      role: "Role Hear",
      image: staffPhfoto1,
      stars: 6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
    {
      id: "2",
      name: "Name",
      role: "Role Hear",
      image: staffPhfoto2,
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
    {
      id: "3",
      name: "Name",
      role: "Role Hear",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
    {
      id: "4",
      name: "Name",
      role: "Role Hear",
      stars: 6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
    {
      id: "5",
      name: "Name",
      role: "Role Hear",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
    {
      id: "6",
      name: "Name",
      role: "Role Hear",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
    {
      id: "7",
      name: "Name",
      role: "Role Hear",
      stars: 6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
    {
      id: "8",
      name: "Name",
      role: "Role Hear",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    },
  ];

  const itemsPerPage = 2;
  const totalItems = Math.ceil(testimonialsInfo.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>

      <div className="testimonials__wrapper">
        <div
          className="testimonials__container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonialsInfo.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>

      <div className="testimonials__carousel">
        <button
          className={`testimonials__button ${currentIndex === 0 ? 'testimonials__button--inactive' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={bPrev} alt="Previous" />
        </button>
        <div className="testimonials__indicators">
          {Array.from({ length: totalItems }).map((_, index) => (
            <div
              key={index}
              className={`testimonials__indicator ${
                index === currentIndex ? "testimonials__indicator--active" : ""
              }`}
            ></div>
          ))}
        </div>
        <button
          className={`testimonials__button ${currentIndex === totalItems - 1 ? 'testimonials__button--inactive' : ''}`}
          onClick={handleNext}
          disabled={currentIndex === totalItems - 1}
        >
          <img src={bNext} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;