import '../Style/CheckoutPage.css';
import { Link } from 'react-router-dom';

import React from 'react';
import Great from '../Images/Greater.svg'; 
import Greater from '../Images/BGreater.svg'; 
import Check from '../Images/check.svg'; 
import Pal from '../Images/Pal.svg'; 
import Card from '../Images/card.svg'; 
import Cards from '../Images/cards.svg'; 
import Navbar from './AddNav';
import Footer from './Footer';


const CheckoutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-12 p-6">
      <div className="hidden md:flex items-center justify-start gap-2 pl-8 mt-8 text-sm">
        <p>Cart</p>
        <div>
          <img src={Check} alt="Check" className="w-4" /> 
        </div>
        <div>
          <img src={Great} alt="Great" className="w-4" /> 
        </div>
        <p className="font-bold">Shipping Information and Payment</p>
        <div>
          <img src={Greater} alt="Greater" className="w-4" /> 
        </div>
        <p>Confirmation</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          <div className="p-8 rounded-3xl bg-white shadow-md">
            <h1 className="text-2xl font-bold mb-6">Shipping Information</h1>
            <input type="text" placeholder="First Name" className="mb-4 w-full p-3 rounded-lg border border-gray-400" />
            <input type="text" placeholder="Last Name" className="mb-4 w-full p-3 rounded-lg border border-gray-400" />
            <div className="flex items-center gap-3 mb-4">
              <select className="w-1/4 p-3 rounded-lg border border-gray-400">
                <option value="" disabled selected>+234</option>
              </select>
              <input type="text" placeholder="Phone Number" className="w-3/4 p-3 rounded-lg border border-gray-400" />
            </div>
            <input type="text" placeholder="Enter Address" className="mb-4 w-full p-3 rounded-lg border border-gray-400" />
            <input type="text" placeholder="Apartment Number" className="mb-4 w-full p-3 rounded-lg border border-gray-400" />
            <div className="flex gap-3 mb-4">
              <select className="w-1/2 p-3 rounded-lg border border-gray-400">
                <option value="" disabled selected>Select City</option>
              </select>
              <select className="w-1/2 p-3 rounded-lg border border-gray-400">
                <option value="" disabled selected>Select State</option>
              </select>
            </div>
            <input type="text" placeholder="Postal Code" className="mb-4 w-full p-3 rounded-lg border border-gray-400" />
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Save my address details for future purchases</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white shadow-md">
            <h2 className="text-xl font-bold mb-6">Payment Card</h2>
            <p className="mb-4"><b>Payment Method:</b></p>
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment-method" className="radio-button" />
                <img src={Pal} alt="Pal" className="w-6" /> 
                <span>PayPal</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="payment-method" className="radio-button" defaultChecked />
                <img src={Card} alt="Card" className="w-6" />
                <span>Credit Card</span>
                <img src={Cards} alt="Cards" className="w-25" /> 
              </div>
            </div>
            <p className="mb-2"><b>Name On Card</b></p>
            <input type="text" placeholder="Enter name on card" className="mb-4 w-full p-3 rounded-lg border border-gray-400" />
            <p className="mb-2"><b>Card Number</b></p>
            <input type="text" placeholder="Enter card number" className="mb-4 w-full p-3 rounded-lg border border-gray-400" />
            <div className="flex gap-3 mb-4">
              <div className="w-1/2">
                <p className="mb-2"><b>Expiration Date</b></p>
                <input type="text" placeholder="MM/YY" className="w-full p-3 rounded-lg border border-gray-400" />
              </div>
              <div className="w-1/2">
                <p className="mb-2"><b>CVV</b></p>
                <input type="text" placeholder="Enter CVV" className="w-full p-3 rounded-lg border border-gray-400" />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Save my card details for future purchases</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 p-6 rounded-3xl bg-white shadow-lg lg:self-start relative" style={{boxShadow: '0px 4px 9px -1px rgba(136, 216, 122, 0.7), 0px 2px 0px -1px rgba(15, 97, 0, 0.06)'}}>
          <h2 className="text-xl font-bold text-center mb-6">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span><b>Sub-Total:</b></span>
            <span><b>₦2,110,000.00</b></span>
          </div>
          <div className="flex justify-between mb-4">
            <span><b>Delivery Fee:</b></span>
            <span><b>₦4,000.00</b></span>
          </div>
          <div className="flex justify-between mb-4">
            <span><b>Discount:</b></span>
            <span><b>₦0.00</b></span>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>TOTAL:</span>
            <span>₦2,114,000.00</span>
          </div>
          <Link to='/Checkout'>
          <button className="bg-green-700 text-white w-full py-3 rounded-lg mt-6 hover:bg-green-800">Checkout</button>
          </Link>
          <p className="text-center mt-4 text-sm">By placing this order, you agree to our <span className="text-green-600 cursor-pointer">Terms and Conditions</span> and <span className="text-green-600 cursor-pointer">Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CheckoutPage;
