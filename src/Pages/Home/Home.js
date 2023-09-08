import React from 'react';
import img1 from "../../Assets/Images/gallery_img1.png";
import img2 from "../../Assets/Images/gallery_img2.png";
import img3 from "../../Assets/Images/gallery_img3.png";
import img4 from "../../Assets/Images/gallery_img4.png";
import './Home.scss';
import { Link } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Catcircle from '../../Components/Catcircle/Catcircle';
import ProductCardPrice from '../../Components/ProductCardPrice/ProductCardPrice';
import ShopInstagram from "../../Components/Instagram/Instagram";
import v1 from "../../Assets/Images/Vector-1.png";
import v2 from "../../Assets/Images/Vector-2.png";
import v3 from "../../Assets/Images/Vector-3.png";
import v4 from "../../Assets/Images/Vector-4.png";
import Right from "../../Assets/Images/home-right.png";
import CardRight from "../../Components/Cards-Right/Card_Right";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";

const Home = () => {
  return (
    <div className='homePage'>
      <section className='dress-cat contain'>
        <Catcircle />
      </section>

      {/* Choosing Elini! */}
      <section className='ch-elini contain contain-bg'>
        <h2 className='sec-head sec-head-ul'>
          Choosing Elini!
        </h2>
        <p className='sec-para'>
          Elini is a luxury brand which was born in the India, a land symbolizing opulence and exceptional
          class. We produce fashion items using original craftsmanship, vibrant prints, and out-of-the-
          ordinary meticulousness. The label was founded by Lila Achimu and is driven by her love and
          passion for both Japanese and Oriental art and culture. Kimaya introduces to the market an array
          of unique designs, for the elegant woman seeking the extraordinary!
        </p>
      </section>

      {/* Fashion gallery  */}
      <section className='home-gallery contain'>
        <div className='upper-gallery'>
          <div className='gallery-card1'>
            <div className='image-container'>
              <img src={img1} alt="HomeGallery" />
              <div className='overlay'>
                <p>ORDER NOW</p>
                <h2>On Discount</h2>
              </div>
            </div>
          </div>
          <div className='gallery-card2'>
            <div className='image-container'>
              <img src={img2} alt="HomeGallery" />
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
              <img src={img3} alt="HomeGallery" />
              <div className='overlay'>
                <p>DAZZLE IT UP</p>
                <h2>Best Sellers</h2>
              </div>
            </div>
          </div>
          <div className='gallery-card1'>
            <div className='image-container'>
              <img src={img4} alt="HomeGallery" />
              <div className='overlay'>
                <p>JUST FOR YOU</p>
                <h2>First Time On Sale</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contain contain-bg product-wrapper'>
        <div className='pr-wrapper-header'>
          <h2 className='sec-head'>Popular Styles</h2>
          <p className='sec-para'>View all</p>
        </div>
        <div className='pr-wrapper-btnbox'>
          <div className='pr-btn active'>All</div>
          <div className='pr-btn'>Kurti</div>
          <div className='pr-btn'>Kurti</div>
          <div className='pr-btn'>Kurti</div>
        </div>
        <ProductCardPrice />
      </section>

      <div className="about__banner contain">
        <div className="ab-left">
          <h3 className="head sec-para">ELINI DESIGN</h3>
          <h3 className="head-sec sec-head">Not Just Clothing But An Art Form</h3>
          <p className="p-text sec-para">
            Kimaya, a portmanteau for Kimono and Abaya is not merely a clothing brand
            but the fusion of two cultures flourishing miles apart geographically. Our
            products are made to emphasize your confidence, elegance and simplicity, by
            bringing your stylish imagination to life. We aim to adorn our customers like we
            do to ourselves and allow them to showcase the liberty in their styles and
            personalities.
          </p>
          <span>
            <Link to="/contact" className="btn">
              Shop All
            </Link>
          </span>
        </div>
        <span className="ab-right">
          <img src={Right} alt="aboutbanner" />
        </span>
      </div>

      {/* Product Slider  */}
      <section className="product-slider contain  contain-bg">
        <div className="slider-heading">
          <h2 className='sec-head'>Forever Clothing</h2>
          <p className='sec-para'>Trousseau must-haves we're currently loving</p>
        </div>
        <Cards />
      </section>

      {/* Product Slider  */}
      <section className="product-slider contain contain-bg">
        <div className="slider-heading">
          <h2 className='sec-head'>Effortless Clothing</h2>
          <p className='sec-para'>Trousseau must-haves we're currently loving</p>
        </div>
        <Cards />
      </section>

      {/* Fav of the week  */}
      <section className="section-container contain contain-bg" >
        <div className="left-section">
          <h2 className='sec-head'>Favourites of the week</h2>
          <p className='sec-para'>Trousseau must-haves we're currently loving</p>
          <button>Shop All</button>
        </div>
        <div className="right-section ">
          <CardRight />
        </div>
      </section>

      <section className='product-wrapper contain contain-bg '>
        <div className='pr-wrapper-header'>
          <h2 className='sec-head'>Shop Instagram</h2>
          <p className='sec-para'>View all</p>
        </div>
        <ShopInstagram />
      </section>

      <div className=" detailsection contain contain-bg">
        <div className="item">
          <img src={v1} alt="v1" />
          <h2>Free delivery</h2>
          <p>on orders above ₹999</p>
        </div>
        <div className="divider"></div>
        <div className="item">
          <img src={v2} alt="v2" />
          <h2>Delivery on time</h2>
          <p>Lorem Ipsum lorem ipsum de color</p>
        </div>
        <div className="divider"></div>
        <div className="item">
          <img src={v3} alt="v3" />
          <h2>Secure payment</h2>
          <p>100% secure payment assurity</p>
        </div>
        <div className="divider"></div>
        <div className="item">
          <img src={v4} alt="v4" />
          <h2>Online support</h2>
          <p>Online support 24/7</p>
        </div>
      </div>
      {/* customer's love  */}
      <TestimonialCard />
      {/* Subscribe  */}
      <Subscribe />
    </div>
  );
};

export default Home;
