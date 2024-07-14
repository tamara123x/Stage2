import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Nav';
import Footer from '../Routes/Footer';

import setting from '../Images/Setting.svg';
import sort from '../Images/Sorticon.svg';

import Note10 from '../Images/Note10.svg';
import S9 from '../Images/S9.svg';
import A51 from '../Images/A51.svg';
import A10 from '../Images/A10.svg';
import ZFlip4 from '../Images/ZFlip4.svg';
import ZFlip4P from '../Images/ZFlip4P.svg';
import ZFold4 from '../Images/ZFold4.svg';
import ZFold2 from '../Images/ZFold2.svg';
import Note20 from '../Images/Note20.svg';
import S23 from '../Images/S23.svg';
import S24Ultra from '../Images/S24Ultra.svg';
import M53 from '../Images/M53.svg';
import A33 from '../Images/A33.svg';
import NoteA14 from '../Images/NoteA14.svg';
import S21 from '../Images/S21.svg';
import A15 from '../Images/A15.svg';
import Love from '../Images/Love.svg';
import Ratings from '../Images/Ratings.svg';

import Right from '../Images/Right.svg';
import Left from '../Images/Left.svg';
import Cart from '../Images/cart2.svg';
import Display from './Display';


const products = [
  { name: 'Samsung Galaxy Note 10Plus - 6.8" (256GB/12GB)', price: '₦780,000', image: Note10, reviews: 21},
  { name: 'Samsung Galaxy S9 5.8" Inch QHD ( 4GB + 64GB ROM )', price: '₦456,000', image: S9, reviews: 21},
  { name: 'Samsung Galaxy A51 Dual Sim (4GB + 128GB)', price: '₦900,000', image: A51, reviews: 21 },
  { name: 'Samsung Galaxy A10 Dual Sim (2 + 32GB)', price: '₦250,000', image: A10, reviews: 21},
  { name: 'Samsung Galaxy Z Flip 4 5G (8GB + 512GB ROM)', price: '₦780,000', image: ZFlip4, reviews: 21},
  { name: 'Samsung Galaxy Z Flip 3 5G (8GB + 256GB)', price: '₦780,000', image: ZFlip4P, reviews: 21},
  { name: 'Samsung Galaxy Z Fold 4 5G (16GB + 256GB)', price: '₦900,000', image: ZFold4, reviews: 21},
  { name: 'Samsung Galaxy Z Fold 2 7.6” Inch 5G (12GB + 258GB)', price: '₦350,000', image: ZFold2, reviews: 21},
  { name: 'Samsung Galaxy Note 20 Ultra 5G 12GB + 128GB', price: '₦500,000', image: Note20 , reviews: 21},
  { name: 'Samsung Galaxy S23 Ultra 5G 8GB + 256GB', price: '₦600,000', image: S23, reviews: 21},
  { name: 'Samsung Galaxy S24 Ultra 5G (12GB + 512GB)Dual Sim', price: '₦1,200,000', image: S24Ultra , reviews: 21},
  { name: 'Samsung Galaxy M53 4G (4GB + 128 ROM)', price: '₦400,000', image: M53, reviews: 21},
  { name: 'Samsung Galaxy A33 6.4" (6GB RAM, 128GB ROM)', price: '₦200,000', image: A33, reviews: 21},
  { name: 'Samsung Galaxy Note A14 6.6" (4GB RAM/128GB ROM)', price: '₦150,000', image: NoteA14, reviews: 21 },
  { name: 'Samsung Galaxy S21 Ultra 5G Single Sim (12GB + 128GB)', price: '₦200,000', image: S21, reviews: 21},
  { name: 'Samsung Galaxy A15 5G Single Sim 6 + 128GB', price: '₦200,000', image: A15, reviews: 21},
];

const Home = () => {
  return (
    <> 
      <Navbar/>
      <Display />
      <div className="home-container bg-gray-100 p-4 text-gray-700">
        <div className="home-header flex flex-col md:flex-row justify-between items-center mb-4 bg-white p-2">
          <div className="categories mb-2 md:mb-0 ">
            <span className="active font-bold cursor-pointer px-4 py-2 block md:inline-block underline">Samsung Phones</span>
            <span className="font-bold cursor-pointer px-4 py-2 block md:inline-block">Samsung Tablets</span>
            <span className="font-bold cursor-pointer px-4 py-2 block md:inline-block">Accessories</span>
          </div>

          <div className="search-settings flex items-center mt-2 md:mt-0">
            <input type="text" placeholder="Search product" className="search-bar w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black" />
            <img src={setting} alt="Set" className="setting-icon ml-4 cursor-pointer" />
          </div>
        </div>

        <div className="series-container flex flex-wrap gap-5 mb-4 bg-white p-2 px-8 ">
          <div className="series-item border-2 border-green-500 bg-green-100 p-2 rounded-md cursor-pointer mb-2 md:mb-0 px-8">All</div>
          <div className="series-item border-2 border-gray-500 p-2 rounded-md cursor-pointer mb-2 md:mb-0 px-10">Galaxy S series</div>
          <div className="series-item border-2 border-gray-500 p-2 rounded-md cursor-pointer mb-2 md:mb-0 px-10">Galaxy Note series</div>
          <div className="series-item border-2 border-gray-500 p-2 rounded-md cursor-pointer mb-2 md:mb-0 px-10">Galaxy Z series</div>
          <div className="series-item border-2 border-gray-500 p-2 rounded-md cursor-pointer mb-2 md:mb-0 px-10">Galaxy A series</div>
          <div className="series-item border-2 border-gray-500 p-2 rounded-md cursor-pointer mb-2 md:mb-0 px-10">Galaxy M series</div>
          <div className="series-item border-2 border-gray-500 p-2 rounded-md cursor-pointer mb-2 md:mb-0 px-10">Galaxy F series</div>
        </div>

        <div className="sort-container flex flex-col md:flex-row justify-between items-center mb-4 bg-white p-2 ">
          <div className="sort-left flex items-center mb-2 md:mb-0">
            <img src={sort} alt="sort" className="sort-icon" />
            <span className="ml-2">Sort by</span>
            <select className="ml-2 py-1 px-2 rounded-md bg-[#FAFAFA]">
              <option>New</option>
              <option>Trending</option>
            </select>
          </div>

          <div className="sort-right text-base">
            Showing 1-16 of 50 results
          </div>
        </div>

        <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-9 px-5">
          {products.map((product, index) => (
            <div className="product bg-white p-2 border border-gray-300 rounded-md relative py-6" key={index}>
              <img src={Love} alt="Fav" className="favorite-icon absolute top-2 right-2 cursor-pointer" />
              <Link to='/ProductCard'>
              <div className="product-image bg-[#FAFAFA] h-64 bg-contain bg-center bg-no-repeat rounded-md py-4" style={{ backgroundImage: `url(${product.image})` }}></div>
              </Link>
              

              <div className="product-info mt-2 px-2">
                <h3 className="text-lg font-semibold py-3">{product.name}</h3>
                <p className="text-xl font-bold pb-3">{product.price}</p>
                <div className="product-reviews flex items-center text-base">
                  <span className="inline-block mr-2 py-2"><img src={Ratings} alt="Ratings" className="Rate" /></span> ({product.reviews} reviews)
                </div>
                <button className="add-to-cart mt-2 bg-[#0F6100] text-white px-3 py-1 rounded-md flex items-center justify-center">
                    <img src={Cart} alt="Cart" className="w-5 h-5 mr-1" /> 
                    <b>Add to Cart</b>
                  </button>
          
              </div>
            </div>
          ))}
        </div>

        <div className="pagination flex items-center justify-center">
          <img src={Left} alt="Left" className="pagination-icon text-2xl cursor-pointer" /> 
          <div className="pagination-number text-xl font-bold mx-2">1</div>
          <img src={Right} alt="Right" className="pagination-icon text-2xl cursor-pointer" /> 
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
