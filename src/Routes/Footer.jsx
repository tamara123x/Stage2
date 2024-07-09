import React from 'react';
import '../Style/Footer.css';
import logo from '../Images/LOGO.svg';
import Mastercard from '../Images/Mastercard.svg';
import Paypal from '../Images/Paypal.svg';
import Verve from '../Images/Verve.svg';
import Visa from '../Images/Visa.svg';
import Facebook from "../Images/Facebook.svg";
import Instagram from "../Images/Insta.svg";
import X from "../Images/Twitter.svg";
import Linkedin from "../Images/Ln.svg";

const Footer = () => {
  return (
    <bottom className="footer">
      <div className="all-footer">
        <div className="footer-frame">
          <div className="footer-left">
            <img src={logo} alt="Ordeal Logo" className="footer-logo" />
            <p>Explore our extensive collection of Samsung's </p>
            <p>cutting-edge smartphones, designed to </p>
            <p> elevate your tech experience. </p>

            <div className="social-icons">
              <img src={Facebook} alt="Facebook" className="icon" />
              <img src={Instagram} alt="Instagram" className="icon" />
              <img src={X} alt="X" className="icon" />
              <img src={Linkedin} alt="Linkedin" className="icon" />
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li> About </li>
                <li> Contact Us </li>
                <li> Support </li>
                <li> Affiliate </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Help</h3>
              <ul>
               <li> Return Policy </li>
                <li> Customer Service </li>
                <li> Legal and Privacy </li>
                <li> Location </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>My Account</h3>
              <ul>
                <li> My Profile </li>
                <li> Orders History </li>
                <li> My Wish Lis </li>
                <li> Orders Tracking </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li> Terms and Conditions </li>
                <li> Privacy Policies </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <h3>Payment Method</h3>
            <div className="payment-icons">
            <img src={Mastercard} alt="MasterCard" className="pay" />
            <img src={Visa} alt="Visa" className="pay" />
            <img src={Paypal} alt="PayPal" className="pay" />
            <img src={Verve} alt="Verve" className="pay" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
          <p>copyright@ordeal.com </p>
        </div>
    </bottom>
  );
};

export default Footer;