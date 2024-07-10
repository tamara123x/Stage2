import React from 'react';
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
    <footer className="bg-[#C2CBC1] p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:pr-10 md:pl-5">
            <img src={logo} alt="Ordeal Logo" className="w-32 h-12 mb-6" />
            <p className="text-gray-700 font-bold mb-2">Explore our extensive collection of Samsung's</p>
            <p className="text-gray-700 font-bold mb-2">cutting-edge smartphones, designed to</p>
            <p className="text-gray-700 font-bold mb-2">elevate your tech experience.</p>
            <div className="flex space-x-4 mt-8">
              <img src={Facebook} alt="Facebook" className="w-12 h-12 p-2 border border-black rounded-lg" />
              <img src={Instagram} alt="Instagram" className="w-12 h-12 p-2 border border-black rounded-lg" />
              <img src={X} alt="X" className="w-12 h-12 p-2 border border-black rounded-lg" />
              <img src={Linkedin} alt="Linkedin" className="w-12 h-12 p-2 border border-black rounded-lg" />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap justify-between">
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-8 mb-4">
                <li className="text-gray-700 mb-2">About</li>
                <li className="text-gray-700 mb-2">Contact Us</li>
                <li className="text-gray-700 mb-2">Support</li>
                <li className="text-gray-700 mb-2">Affiliate</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Help</h3>
              <ul className="space-y-8 mb-4">
                <li className="text-gray-700 mb-2">Return Policy</li>
                <li className="text-gray-700 mb-2">Customer Service</li>
                <li className="text-gray-700 mb-2">Legal and Privacy</li>
                <li className="text-gray-700 mb-2">Location</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">My Account</h3>
              <ul className="space-y-8 mb-4">
                <li className="text-gray-700 mb-2">My Profile</li>
                <li className="text-gray-700 mb-2">Orders History</li>
                <li className="text-gray-700 mb-2">My Wish List</li>
                <li className="text-gray-700 mb-2">Orders Tracking</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-8 mb-4">
                <li className="text-gray-700 mb-2">Terms and Conditions</li>
                <li className="text-gray-700 mb-2">Privacy Policies</li>
              </ul>
            </div>
            <div className="w-full mt-6">
              <h3 className="text-lg font-bold mb-4">Payment Method</h3>
              <div className="flex space-x-4">
                <img src={Mastercard} alt="MasterCard" className="w-12 h-12" />
                <img src={Visa} alt="Visa" className="w-12 h-12" />
                <img src={Paypal} alt="PayPal" className="w-12 h-12" />
                <img src={Verve} alt="Verve" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">© ordeal.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
