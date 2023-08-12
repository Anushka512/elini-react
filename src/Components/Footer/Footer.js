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
    <footer className="footer">
      <div className="footer-line1">
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
        </ul>
      </div>
      <div className="footers-line2">
      <ul>
            <p>Sitemap</p>
            <p>Store Locator</p>
            <p>Investor Relations</p>
            <p>Blog</p>
        </ul>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className='icon'/>
        <FontAwesomeIcon icon={faTwitter} className='icon'/>
        <FontAwesomeIcon icon={faInstagram} className='icon'/>
        <FontAwesomeIcon icon={faYoutube} className='icon'/>
        <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
      </div>
      <div className="footer-line contact-info">
        <p>Email Us- customercare@tcnsclothing.com | Call Us at +91-7583896939 | WhatsApp at +91-8448198618 | Timings: 10 AM to 6 PM, Mon to Sun. We are closed on bank holidays. </p>
      </div>
    </footer>
  );
};

export default Footer;
