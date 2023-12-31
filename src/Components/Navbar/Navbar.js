
import React, { useState } from 'react';
import {
    AiOutlineShopping,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineSearch,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "../../Assets/Images/logo.png"
import Cart from '../Cart/Cart';

import "./Navbar.scss";
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";
import { setWishOpen } from "../../Redux/slices/appConfigSlice";
import Wish from "../Wishlist/Wishlist";

const Navbar = () => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);


    const { isCartOpen } = useSelector((state) => state.app); const { isWishOpen } = useSelector((state) => state.app);

    const { carts } = useSelector((state) => state.products);




    const openWishDialog = () => {
        dispatch(setWishOpen(true));
    };

    const openCartDialog = () => {
        dispatch(setCartOpen(true));
    };



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
                        <Link to={`/ethnicwear`}>Ethnic Wear</Link>
                        <Link to={`/shopnow`}>Shop Now</Link>
                        <Link to={`/storelocator`}>Store Locator</Link>
                        <Link to={`/contactus`}>Reach Us</Link>

                    </ul>
                    <div className="right">
                        <AiOutlineSearch />
                        <AiOutlineHeart onClick={openWishDialog} />
                        {/* onClick={openLoginDialog} */}
                        <Link to={`/login`}>
                            <AiOutlineUser />
                        </Link>
                        <AiOutlineShopping onClick={openCartDialog} />
                    </div>
                </div>

                <div className="responsive__menu">
                    <AiOutlineSearch
                        size={25}
                        style={{ marginRight: "10px" }} />
                    <AiOutlineHeart
                        size={25}
                        style={{ marginRight: "10px" }}
                        onClick={openWishDialog}
                    />
                    <AiOutlineShopping
                        size={25}
                        style={{ marginRight: "10px" }}
                        onClick={openCartDialog}
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
                                    <Link to={`/about`}>About us</Link>
                                    <Link to={`/ethnicwear`}>Ethnic Wear</Link>
                                    <Link to={`/shopnow`}>Shop Now</Link>
                                    <Link to={`/storelocator`}>Store Locator</Link>
                                    <Link to={`/contactus`}>Reach Us</Link>
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </nav>

            {isCartOpen && <Cart carts={carts} />}
            {isWishOpen && <Wish carts={carts} />}



            {/* {showLoginDialog && <LoginDialog />} */}

        </div>
    )
}
export default Navbar;