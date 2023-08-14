import React from 'react';
import ArrowButton from "../Arrowbutton/ArrowButton";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../ProductCardPrice/ProductCardPrice.scss";

const products = [
  {
    id: 1,
    name: 'Product 1',
    title: 'Description for Product 1',
    shop: "Shop Now",
    image: require('../../Assets/Images/Insta-1.png'),
  },
  {
    id: 2,
    name: 'Product 2',
    title: 'Description for Product 2',
    shop: "Shop Now",
    image: require('../../Assets/Images/Insta-2.png'),
  },
  {
    id: 3,
    name: 'Product 3',
    title: 'Description for Product 3',
    shop: "Shop Now",
    image: require('../../Assets/Images/Insta-3.png'),
  },
  {
    id: 4,
    name: 'Product 4',
    title: 'Description for Product 4',
    shop: "Shop Now",
    image: require('../../Assets/Images/Insta-4.png'),
  },
  {
    id: 5,
    name: 'Product 5',
    title: 'Description for Product 5',
    shop: "Shop Now",
    image: require('../../Assets/Images/Insta-5.png'),
  },
  {
    id: 6,
    name: 'Product 6',
    title: 'Description for Product 6',
    shop: "Shop Now",
    image: require('../../Assets/Images/Insta-1.png'),
  },
  // Add more products as needed
];

function ProdcuctCardPrice() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <ArrowButton type="next" />,
    prevArrow: <ArrowButton type="prev" />,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      {products.map(product => (
        <div key={product.id} className="pc-price">
          <div className='pc-price-img'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='pc-price-footer'>
            <p className='pc-price-name'>{product.name}</p>
            <p className='pc-price-title'>{product.title}</p>
            <p className='pc-price-price'>{product.shop}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default ProdcuctCardPrice





