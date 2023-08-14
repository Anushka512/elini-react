import React from 'react';
import img1 from "../../Assets/Images/gallery_img1.png";
import img2 from "../../Assets/Images/gallery_img2.png";
import img3 from "../../Assets/Images/gallery_img3.png";
import img4 from "../../Assets/Images/gallery_img4.png";
import './Home.scss';
import Cards from "../../Components/Cards/Cards";
import Catcircle from '../../Components/Catcircle/Catcircle';
import ProductCardPrice from '../../Components/ProductCardPrice/ProductCardPrice'

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

      {/* Product Slider  */}
      <section className="product-slider contain">
        <div className="slider-heading">
          <h2 className='sec-head'>Forever Clothing</h2>
          <p className='sec-para'>Trousseau must-haves we're currently loving</p>
        </div>
        <Cards />
      </section>
    </div>
  );
};

export default Home;
