import React from 'react';
import ArrowButton from "../Arrowbutton/ArrowButton";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ProductCardPrice.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Product 1',
    title: 'Description for Product 1',
    price: "999",
    image: require('../../Assets/Images/product_1.png'),
  },
  {
    id: 2,
    name: 'Product 2',
    title: 'Description for Product 2',
    price: "999",
    image: require('../../Assets/Images/product_2.png'),
  },
  {
    id: 3,
    name: 'Product 3',
    title: 'Description for Product 3',
    price: "999",
    image: require('../../Assets/Images/product_3.png'),
  },
  {
    id: 4,
    name: 'Product 4',
    title: 'Description for Product 4',
    price: "999",
    image: require('../../Assets/Images/product_4.png'),
  },
  {
    id: 5,
    name: 'Product 5',
    title: 'Description for Product 5',
    price: "999",
    image: require('../../Assets/Images/product_1.png'),
  },
  {
    id: 6,
    name: 'Product 6',
    title: 'Description for Product 6',
    price: "999",
    image: require('../../Assets/Images/product_2.png'),
  },
  // Add more products as needed
];

function ProdcuctCardPrice() {
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
    <Slider {...settings}>
      {products.map(product => (
        <div key={product.id} className="pc-price">
          <div className="wishlist-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <Link to="/productdetails">
            <div className='pc-price-img'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='pc-price-footer'>
              <p className='pc-price-name'>{product.name}</p>
              <p className='pc-price-title'>{product.title}</p>
              <p className='pc-price-price'>₹{product.price}</p>
            </div>
          </Link>
        </div>
      ))}

    </Slider>
  )
}

export default ProdcuctCardPrice;





