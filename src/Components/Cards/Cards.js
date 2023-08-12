import React from 'react';
import "./Cards.scss";
import ArrowButton from "../Arrowbutton/ArrowButton";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

export default function Cards() {
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
        <div>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        {/* <h3>{product.name}</h3> */}
                        <p>{product.name} <br></br> {product.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
