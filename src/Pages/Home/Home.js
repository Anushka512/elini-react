import React from 'react';
import img1 from "../../Assets/Images/gallery_img1.png";
import img2 from "../../Assets/Images/gallery_img2.png";
import img3 from "../../Assets/Images/gallery_img3.png";
import img4 from "../../Assets/Images/gallery_img4.png";
import './Home.scss';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Cards from "../../Components/Cards/Cards";
import Subscribe from "../../Components/Subscribe/Subscribe";
import ArrowButton from "../../Components/Arrowbutton/ArrowButton";
import Stars from "../../Assets/Images/Star.png"

const Home = () => {
  const testimonials = [
    { name: 'John Doe', content: 'Great service! Highly recommended.', title: 'hello' },
    { name: 'Jane Smith', content: 'Excellent products and friendly staff.', title: 'hello' },
    { name: 'John Doe', content: 'Great service! Highly recommended.', title: 'hello' },
    { name: 'Jane Smith', content: 'Excellent products and friendly staff.', title: 'hello' },
    { name: 'John Doe', content: 'Great service! Highly recommended.', title: 'hello' },
    { name: 'Jane Smith', content: 'Excellent products and friendly staff.', title: 'hello' },
    { name: 'John Doe', content: 'Great service! Highly recommended.', title: 'hello' },
    { name: 'Jane Smith', content: 'Excellent products and friendly staff.', title: 'hello' },
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
    <>
      <div className='home contain'>
        <div className='upper-gallery '>
          <div className='gallery-card1'>
            <div className='image-container'>
              <img src={img1} alt="Image1" />
              <div className='overlay'>
                <p>ORDER NOW</p>
                <h2>On Discount</h2>
              </div>
            </div>
          </div>
          <div className='gallery-card2'>
            <div className='image-container'>
              <img src={img2} alt="Image2" />
              <div className='overlay'>
                <p>FRESHLY CRAFTED</p>
                <h2>Latest Arrivals</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='lower-gallery'>
          <div className='gallery-card2'>
            <div className='image-container'>
              <img src={img3} alt="Image3" />
              <div className='overlay'>
                <p>DAZZLE IT UP</p>
                <h2>Best Sellers</h2>
              </div>
            </div>
          </div>
          <div className='gallery-card1'>
            <div className='image-container'>
              <img src={img4} alt="Image4" />
              <div className='overlay'>
                <p>JUST FOR YOU</p>
                <h2>First Time On Sale</h2>
              </div>
            </div>
          </div>
        </div>

        <section className="product-slider">
          <div className="slider-heading">
            <h2>Forever Clothing</h2>
            <p>Trousseau must-haves we're currently loving</p>
          </div>
          <Cards />
        </section>

        <div className="testimonials-slider">
          <h2 className="section-heading">Testimonials</h2>
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
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
