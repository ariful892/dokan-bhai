import React from 'react';
import './Footer.css'
import facebook from '../../../assets/icons/facebook.png';
import instagram from '../../../assets/icons/instagram.png';
import twitter from '../../../assets/icons/twitter.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className='footer-items-container'>
                <p className="footer-items-title">Menu</p>
                <a className="footer-items">Privacy policy</a>
                <a className="footer-items">Purchasing and delivery policy</a>
                <a className="footer-items">Terms and condition</a>
                <a className="footer-items">Career</a>
            </div>
            <div className='footer-items-container'>
                <p className="footer-items-title">Customer Care</p>
                <a className="footer-items">Help center</a>
                <a className="footer-items">How to buy</a>
                <a className="footer-items">Return & Refund</a>
                <a className="footer-items">FAQ</a>
            </div>
            <div className='footer-items-container'>
                <p className="footer-items-title">Contact Us</p>
                <a className="footer-items">255 West Bashundhara RA, Dhaka</a>
                <a className="footer-items">+88 01987654321</a>
                <a className="footer-items">dokanvai@gmail.com</a>
            </div>
            <div className='footer-items-container'>
                <p className="footer-items-title">Give us Feedback</p>
                <p className="footer-items-title follow-us">Follow US</p>
                <div className='social-link'>
                    <a className=""><img src={facebook} alt="" /></a>
                    <a className=""><img src={instagram} alt="" /></a>
                    <a className=""><img src={twitter} alt="" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;