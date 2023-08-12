import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../Assets/Images/gallery_img1.png";
import img2 from "../../Assets/Images/gallery_img2.png";
import img3 from "../../Assets/Images/gallery_img3.png";
import img4 from "../../Assets/Images/gallery_img4.png";
import './Home.scss';
import ArrowButton from "../../Components/Arrowbutton/ArrowButton";

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    image: require('../../Assets/Images/image-box1.png'),
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    image: require('../../Assets/Images/image-box2.png'),
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    image: require('../../Assets/Images/image-box3.png'),
  },
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    image: require('../../Assets/Images/image-box1.png'),
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    image: require('../../Assets/Images/image-box2.png'),
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    image: require('../../Assets/Images/image-box3.png'),
  },

  // Add more products as needed
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <ArrowButton type="next" />,
    prevArrow: <ArrowButton type="prev" />,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className='home contain'>
      <div className='upper-gallery'>
        <div className='gallery-card1'>
          <div className='image-container'>
            <img src={img1} alt="Image 1" />
            <div className='overlay'>
              <p>ORDER NOW</p>
              <h2>On Discount</h2>
            </div>
          </div>
        </div>
        <div className='gallery-card2'>
          <div className='image-container'>
            <img src={img2} alt="Image 2" />
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
            <img src={img3} alt="Image 3" />
            <div className='overlay'>
              <p>DAZZLE IT UP</p>
              <h2>Best Sellers</h2>
            </div>
          </div>
        </div>
        <div className='gallery-card1'>
          <div className='image-container'>
            <img src={img4} alt="Image 4" />
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
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
