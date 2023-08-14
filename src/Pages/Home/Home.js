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

const Home = () => {
 
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
          <Cards/>
      </section>
    </div>
  );
};

export default Home;
