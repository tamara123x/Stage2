import React from 'react';
import Verify from '../Images/Verify.svg';
import Navbar from './Nav';
import Footer from './Footer';


const Checkout = () => {
  return (
    <>
    <Navbar/>
    <div className="text-center pt-12 md:pt-16 lg:pt-24 pb-20"> {/* Reduced top padding and added bottom padding */}
      <div className="text-green-500 flex justify-center">
         <img src={Verify} alt="Verify" className="w-16 md:w-20 lg:w-24 mb-4" />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider mb-6 md:mb-8">Thank you for placing order</h1>
      <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-10 md:mt-12 lg:mt-16 pt-6 gap-6 md:gap-8 lg:gap-14 rounded-3xl bg-white shadow-md text-gray-900 pb-6">
        <div className="w-full px-6 md:px-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider mb-8 md:mb-10">Order Summary</h2>
          <div className="flex justify-between mb-4 md:mb-6">
            <span className="text-lg md:text-xl font-bold">Sub-Total:</span>
            <span className="text-lg md:text-xl font-bold">₦2,110,000.00</span>
          </div>
          <div className="flex justify-between mb-4 md:mb-6">
            <span className="text-lg md:text-xl font-bold">Delivery Fee:</span>
            <span className="text-lg md:text-xl font-bold">₦4,000.00</span>
          </div>
          <div className="flex justify-between mb-4 md:mb-6">
            <span className="text-lg md:text-xl font-bold">Discount:</span>
            <span className="text-lg md:text-xl font-bold">₦0.00</span>
          </div>
          <div className="flex justify-between mt-8 md:mt-12 mb-8 md:mb-10 font-extrabold">
            <span className="text-lg md:text-xl"><h3>TOTAL:</h3></span>
            <span className="text-lg md:text-xl"><h3>₦2,114,000.00</h3></span>
          </div>
          <button className="bg-white text-green-700 border md:border-none border-green-700 rounded-md cursor-pointer block w-3/4 md:w-1/2 mx-auto my-4 mt-8 text-sm md:text-base hover:bg-green-500 hover:text-white mb-6 md:mb-8"><h4><b>View Receipt</b></h4></button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
