import React, { useState } from 'react';
import logo from '../Images/LOGO.svg';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 h-[100px] bg-white shadow-md">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Ordeal Logo" className="w-[180px] h-[35px]" /> 
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className={`fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 md:static md:flex md:flex-row md:items-center md:gap-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to ='/'> <li className="p-4 md:p-6"><b>Home</b></li> </Link>
        <li className="bg-[#E3E3E3] p-4 md:p-6"><b>Shop</b></li>
        <li className="p-4 md:p-6"><b>About us</b></li>
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
          <Link  to="/cart" className="text-2xl border-none hover:text-[#0F6100]">
           <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <a href="/wishlist" className="text-2xl border-none hover:text-[#0F6100]"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="/user" className="text-2xl border-none hover:text-[#0F6100]"><FontAwesomeIcon icon={faUser} /></a>
          <a href="/signin" className="bg-[#0F6100] text-[#DEFFD8] py-2 px-4 rounded-lg text-sm font-bold hover:bg-[#20b041] hover:text-[#f6f2f2]">Login/Signup</a>
        </div>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <Link to="/cart" className="ml-2 text-2xl border-none hover:text-[#0F6100]">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <a href="/wishlist" className="ml-2 text-2xl border-none hover:text-[#0F6100]"><FontAwesomeIcon icon={faHeart} /></a>
        <a href="/user" className="ml-2 text-2xl border-none hover:text-[#0F6100]"><FontAwesomeIcon icon={faUser} /></a>
        <a href="/signin" className="bg-[#0F6100] text-[#DEFFD8] py-2 px-4 rounded-lg text-sm font-bold hover:bg-[#20b041] hover:text-[#f6f2f2]">Login/Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
