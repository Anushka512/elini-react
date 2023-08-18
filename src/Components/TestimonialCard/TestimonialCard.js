import React from "react";
import Stars from "../../Assets/Images/Star.png";
import "./TestimonialCard.scss";
import Slider from 'react-slick';
import ArrowButton from "../Arrowbutton/ArrowButton";

function TestimonialCard() {
  const testimonials = [
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    // Add more testimonials
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <ArrowButton type="next" />,
    prevArrow: <ArrowButton type="prev" />,
    autoplay: true,
    autoplaySpeed: 5000,
  };


  return (
    <div className="testimonials-slider contain">
        <h2 className="sec-head">Customer's Love</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img className="stars" src={Stars} alt="RatingStart" />
              <h3 className="title">{testimonial.title}</h3>
              <p className="content">{testimonial.content}</p>
              <p className="name">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
  );
}

export default TestimonialCard;
