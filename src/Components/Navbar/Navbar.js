import React from 'react';
import {
    AiOutlineShopping,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "../../Assets/Images/logo.png"
import "./Navbar.scss";
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    return (
        <div className="wrapper__nav ">
            <div className="top__nav nav-contain">
                <div className="social__icon">
                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsInstagram />
                    </a>

                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsTwitter />
                    </a>

                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsWhatsapp />
                    </a>

                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsFacebook />
                    </a>

                </div>
                <p className="header-sale">
                    Use RAKHI50 for FLAT 50% OFF
                </p>
            </div>
            <nav className="navbar-items nav-contain">
                <div className="container nav__container">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className="app__navbar-links">
                        <Link to={`/`}>Home</Link>
                        <Link to={`/about`}>About us</Link>
                        <li>Ethnic Wear</li>
                        <li>New Arrivals</li>
                        <li>Store Locator</li>
                        <Link to={`/contactus`}>Reach Us</Link>

                    </ul>
                    <div className="right">
                        <AiOutlineSearch />
                        <AiOutlineHeart />
                        <AiOutlineUser />
                        <AiOutlineShopping />
                    </div>
                </div>

                <div className="responsive__menu">
                    <AiOutlineSearch
                        size={25}
                        style={{ marginRight: "10px" }} />
                    <AiOutlineHeart
                        size={25}
                        style={{ marginRight: "10px" }} />
                    <AiOutlineShopping
                        size={25}
                        style={{ marginRight: "10px" }}
                    />
                    <AiOutlineUser size={25} style={{ marginRight: "35px" }} />

                    <div className="app__navbar-menu">
                        <HiMenuAlt4 onClick={() => setToggle(true)} />
                        {toggle && (
                            <motion.div
                                whileInView={{ x: [200, 0] }}
                                transition={{ duration: 0.85, ease: "easeOut" }}
                            >
                                <HiX onClick={() => setToggle(false)} />
                                <ul className='mobile'>
                                    <Link to={`/`}>Home</Link>
                                    <li>About us</li>
                                    <li>Ethnic Wear</li>
                                    <li>New Arrivals</li>
                                    <li>Store Locator</li>
                                    <li>Reach Us</li>
                                    
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;