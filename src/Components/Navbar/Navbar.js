import React from 'react';
import {
    AiOutlineShopping,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineSearch,
} from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "../../Assets/Images/logo.png"
import "./Navbar.scss";
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    return (
        <div className="wrapper__nav">
            <div className="top__nav">
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
                    20% off on orders above ₹3999.Valid until 20th Sept.
                </p>
            </div>
            <nav className="navbar-items">
                <div className="container nav__container">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className="app__navbar-links">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Ethnic Wear</li>
                        <li>New Arrivals</li>
                        <li>Reach Us</li>
                        <li>Store Locator</li>

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
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Ethnic Wear</li>
                                    <li>New Arrivals</li>
                                    <li>Reach Us</li>
                                    <li>Store Locator</li>
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