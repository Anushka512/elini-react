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
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Sitemap</p>
          <p>Store Locator</p>
          <p>Investor Relations</p>
          <p>Blog</p>
        </ul>
      </div>

      <div className="footer-line contact-info">
        <p>Copyright 2023, Elini</p>
      </div>
    </footer>
  );
};

export default Footer;