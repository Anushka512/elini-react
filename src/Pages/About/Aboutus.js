import React from 'react';
import banner from "../../Assets/Images/about-head.png";
import "./Aboutus.scss";
import { Link } from "react-router-dom";
import about from "../../Assets/Images/about-right.png";

export default function Aboutus() {
    return (
        <div className='about'>
            <div className="banner">
                <div className=" hero__container">
                    <img src={banner} alt="HERO__IMG" />
                </div>
            </div>
            <div className='ch-elini contain contain-bg'>
                <h2 className='sec-head sec-head-ul'>
                    The Brand!
                </h2>
                <p className='sec-para'>
                    Elini is a luxury brand which was born in the India, a land symbolizing opulence and exceptional
                    class. We produce fashion items using original craftsmanship, vibrant prints, and out-of-the-
                    ordinary meticulousness. The label was founded by Lila Achimu and is driven by her love and
                    passion for both Japanese and Oriental art and culture. Kimaya introduces to the market an array
                    of unique designs, for the elegant woman seeking the extraordinary!
                </p>
            </div>
            <div className="about__banner contain">
                <div className="ab-left">
                    <h3 className="head sec-para">MEET THE FOUNDERS</h3>
                    <h3 className="head-sec sec-head sec-head-ul">Know Our Story</h3>
                    <p className="p-text sec-para">
                        Elini, a portmanteau for Kimono and Abaya is not merely a clothing brand
                        but the fusion of two cultures flourishing miles apart geographically. Our
                        products are made to emphasize your confidence, elegance and simplicity, by
                        bringing your stylish imagination to life. We aim to adorn our customers like we
                        do to ourselves and allow them to showcase the liberty in their styles and
                        personalities.
                    </p>
                    <span>
                        <Link to="/contact" className="btn">
                            Meet Up
                        </Link>
                    </span>
                </div>
                <span className="ab-right">
                    <img src={about} alt="aboutbanner" />
                </span>
            </div>
            <div className='ch-elini contain contain-bg'>
                <h2 className='sec-head sec-head-ul'>
                    The Mission!
                </h2>
                <p className='sec-para'>
                    <span>Elini</span> is a luxury brand which was born in the India, a land symbolizing opulence and exceptional
                    class. We produce fashion items using original craftsmanship, vibrant prints, and out-of-the-
                    ordinary meticulousness. The label was founded by Lila Achimu and is driven by her love and
                    passion for both Japanese and Oriental art and culture. Kimaya introduces to the market an array
                    of unique designs, for the elegant woman seeking the extraordinary!
                </p>
            </div>
        </div>
    )
}
