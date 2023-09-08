import React, { useState } from 'react';
import './ProductDetails.scss';
import image1 from "../../Assets/Images/Insta-1.png";
import { BsArrowDown } from "react-icons/bs";
import v1 from "../../Assets/Images/Vector-1.png";
import v2 from "../../Assets/Images/Vector-2.png";
import v3 from "../../Assets/Images/Vector-3.png";
import v4 from "../../Assets/Images/Vector-4.png";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Insta from "../../Components/Instagram/Instagram";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    // State to manage selected color, size, and quantity
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    // Dummy product data (replace with actual data)
    const product = {
        name: 'Ariyana Couture',
        description: 'Silk Organza Jacket Draped skirt',
        mrp: 1000,
        discountedPrice: 800,
        colors: ['Red', 'Blue', 'Green'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [image1, image1, image1],
        manufacturingDetails: 'Lorem ipsum manufacturing details...',
        productDescription: 'The Tropicana jumpsuit is a cherished classic. The tailored jumpsuit shape in this beautiful print is perfect for a casual night out. The lightweight crepe creates a fluid and feminine silhouette when accentuated with the accompanying belt.',
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="product-details-container contain contain-bg">
                <div className="left-section">
                    <div className="vertical-images">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                    <div className="main-product-image">
                        <img src={product.images[0]} alt="Main Product" />
                    </div>
                </div>
                <div className="right-section">
                    <div className="product-info">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <div className="price">
                            <span className="mrp"> ₹{product.mrp} </span>
                            <span className="discounted-price">₹{product.discountedPrice}(15%OFF)</span>
                        </div>
                        <div className="color-options">
                            {product.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-swatch ${color === selectedColor ? 'selected' : ''}`}
                                    onClick={() => handleColorChange(color)}
                                    style={{ backgroundColor: color.toLowerCase() }}
                                ></div>
                            ))}
                        </div>
                        <div className="size-options">
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`size-button ${size === selectedSize ? 'selected' : ''}`}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="quantity">
                            <div className='quant'>
                            <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                            </div>
                        </div>
                        <div >
                            <FontAwesomeIcon icon={faHeart} className="wishlist-icon"/><button className="wishlist-button">Add to Cart</button><br></br>
                        </div>
                        <button className="cart-button">Buy Now</button> <button className="coupon">Apply Coupon</button><button className="coupon1">Apply</button>
                    </div>
                    <div className="product-description-reviews">
                        <h3>Description</h3>
                        <p>{product.productDescription}</p>

                    </div>
                    <div className={`manufacturing-details ${isOpen ? 'open' : ''}`}>
                        <div className='arrow'>
                            <h3 onClick={toggleAccordion}>Manufacturing Details</h3>
                            <BsArrowDown onClick={toggleAccordion} style={{ fontSize: "20px", marginTop: "5px" }} /></div>
                        <p>{product.manufacturingDetails}</p>
                    </div>
                    <div className="links">
                        <a href="/">View Size Chart</a>
                        <a href="/">Return & Exchange Policy</a>
                    </div>
                </div>
            </div>
            <div className=" detailsection  contain contain-bg">
                <div className="item">
                    <img src={v1} alt="v1" />
                    <h3>Free delivery</h3>
                    <p>on orders above ₹999</p>
                </div>
                <div className="divider"></div>
                <div className="item">
                    <img src={v2} alt="v2" />
                    <h3>Delivery on time</h3>
                    <p>Lorem Ipsum lorem ipsum de color</p>
                </div>
                <div className="divider"></div>
                <div className="item">
                    <img src={v3} alt="v3" />
                    <h3>Secure payment</h3>
                    <p>100% secure payment assurity</p>
                </div>
                <div className="divider"></div>
                <div className="item">
                    <img src={v4} alt="v4" />
                    <h3>Online support</h3>
                    <p>Online support 24/7</p>
                </div>
            </div>
            <section className='product-wrapper contain'>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head sec-head-ul'>You may also like</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <Insta />
            </section>
            <Subscribe />
        </>
    );
};

export default ProductDetails;
