import React from 'react';
import { Link } from 'react-router-dom';
import './Sitemap.scss';

const routes = [
    { path: '/', label: 'Home' },
    { path: '/signup', label: 'Sign Up' },
    { path: '/login', label: 'Login' },
    { path: '/shopnow', label: 'Shop Now' },
    { path: '/productdetails', label: 'Product Details' },
    { path: '/about', label: 'About' },
    { path: '/ethnicwear', label: 'Ethnic Wear' },
    { path: '/storelocator', label: 'Store Locator' },
    { path: '/contactus', label: 'Contact Us' },
    { path: '/productcard', label: 'Product Card' },
    { path: '/user', label: 'User Dashboard' },
    { path: '/user/password', label: 'Change Password' },
    { path: '/user/orders', label: 'My Orders' },
    { path: '/user/giftcards', label: 'Gift Cards' },
    { path: '/user/address', label: 'Address Book' },
    { path: '/blog', label: 'Blog' },
    { path: '/checkout', label: 'Checkout' },
];

const Sitemap = () => {
    return (
        <div className=" sitemap contain-bg contain">
            <h1 className="sec-head sec-head-ul">Website Sitemap</h1>
            <ul >
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sitemap;
