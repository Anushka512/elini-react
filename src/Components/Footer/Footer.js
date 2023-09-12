import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer contain">
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className='icon' />
        <FontAwesomeIcon icon={faTwitter} className='icon' />
        <FontAwesomeIcon icon={faInstagram} className='icon' />
        <FontAwesomeIcon icon={faYoutube} className='icon' />
        <FontAwesomeIcon icon={faWhatsapp} className='icon' />
      </div>
      <div className="footer-line">
        <ul>
          <p>Support</p>
          <p>Company</p>
          <p>Refund policy</p>
          <p>Privacy Policy</p>
          <p>Return Policy</p>
          <p>Fashion Awards</p>
          <p>Delivery Policy</p>
          <p><Link to={`/contactus`}>Reach Us</Link></p>
          <p>Careers</p>
          <p>Sitemap</p>
          <p><Link to={`/storelocator`}>Store Locator</Link></p>
          <p>Investor Relations</p>
          <p><Link to={`/blog`}>Blog</Link></p>
        </ul>
      </div>

      <div className="footer-line contact-info">
        <p>Copyright 2023, Elini</p>
      </div>
    </footer>
  );
};

export default Footer;