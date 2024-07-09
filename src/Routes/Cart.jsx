// Cart.js
import { Link } from 'react-router-dom';
import React from 'react';
import Sub from '../Images/Sub.svg';
import Add from '../Images/Add.svg';
import Delete from '../Images/Delete.svg';
import S24Ultra from '../Images/S24Ultra.svg';
import S23 from '../Images/S23.svg';
import A10 from '../Images/A10.svg';
import '../Style/Cart.css'; // Import external CSS file
import Navbar from './AddNav';
import Footer from './Footer';

const products = [
  { name: 'Samsung Galaxy S24 Ultra 5G (12GB+512GB) Dual Sim', price: '₦1,200,000', image: S24Ultra },
  { name: 'Samsung Galaxy S23 Ultra 5G 8GB+256GB', price: '₦660,000', image: S23 },
  { name: 'Samsung Galaxy A10 Dual Sim (2+32GB)', price: '₦250,000', image: A10 },
];

const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className="p-20">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">CART</h1>
        <h3 className="text-xl font-semibold">All items (3)</h3>
      </div>

      <div className="lg:flex lg:flex-row lg:gap-6">
        <div className="lg:w-2/3 flex flex-col gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 lg:flex items-center gap-4 relative">
              <input type="checkbox" className="green-checkbox" checked />
              <div className="w-24 h-24 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="flex-1 p-4 bg-[#FAFAFA] rounded-lg">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-md font-bold">{product.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <img src={Sub} alt="Sub" className="w-4 h-4 border rounded-lg" />
                  <p className="px-2 py-1 border rounded-lg">1</p>
                  <img src={Add} alt="Add" className="w-4 h-4 border rounded-lg" />
                </div>
              </div>
              <img src={Delete} alt="Delete" className="w-6 h-6 cursor-pointer absolute top-4 right-4" />
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mt-8 mb-12">Order Summary</h2>
          <div className="flex justify-between text-xl mb-10">
            <span className="font-semibold">Sub-Total:</span>
            <span className="font-semibold">₦2,110,000.00</span>
          </div>
          <div className="flex justify-between text-xl mb-10">
            <span className="font-semibold">Delivery Fee:</span>
            <span className="font-semibold">₦4,000.00</span>
          </div>
          <div className="flex justify-between text-xl mb-10">
            <span className="font-semibold">Discount:</span>
            <span className="font-semibold">₦0.00</span>
          </div>
          <div className="flex justify-between mb-8 text-2xl font-bold">
            <span>TOTAL:</span>
            <span>₦2,114,000.00</span>
          </div>
        <Link to= '/CheckoutPage'>
           <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg w-full py-3">Proceed to Checkout</button>
        </Link>
        </div>
      </div>

      <button className="mt-6 ml-6 py-2 px-4 text-green-700 font-bold border border-green-700 rounded-lg hover:bg-green-100">Continue Shopping</button>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
