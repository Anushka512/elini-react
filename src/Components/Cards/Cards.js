import React from 'react';
import "./Cards.scss";
import ArrowButton from "../Arrowbutton/ArrowButton";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Shop Now',
        image: require('../../Assets/Images/image-box1.png'),
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Shop Now',
        image: require('../../Assets/Images/image-box2.png'),
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Shop Now',
        image: require('../../Assets/Images/image-box3.png'),
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Shop Now',
        image: require('../../Assets/Images/image-box1.png'),
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Shop Now',
        image: require('../../Assets/Images/image-box2.png'),
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'Shop Now',
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
                        <p >{product.name}  <br></br><hr style={{
                            color: '#FFFFFF',
                            backgroundColor: '#FFFFFF',
                            height: 2.5,
                            width: 60,
                            padding: 1,
                            border: faBorderNone,
                            gap: 10,
                        }}></hr> {product.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
