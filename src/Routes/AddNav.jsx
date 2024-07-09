import React, { useState } from 'react';
import logo from '../Images/LOGO.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const IconWithBadge = ({ icon, badgeCount }) => (
  <div className="relative">
    <FontAwesomeIcon icon={icon} className="text-2xl" />
    {badgeCount > 0 && (
      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-700 text-white rounded-full text-xs px-1">
        {badgeCount}
      </span>
    )}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 bg-white shadow-md">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Ordeal Logo" className="w-44 h-9" />
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className={`fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 md:static md:flex md:flex-row md:items-center md:gap-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li className="p-4 md:px-6"><b>Home</b></li>
        <li className="bg-gray-300 p-4 md:px-6"><b>Shop</b></li>
        <li className="p-4 md:px-6"><b>About us</b></li>
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
          <a href="/cart" className="text-2xl hover:text-green-700">
            <IconWithBadge icon={faShoppingCart} badgeCount={3} />
          </a>
          <a href="/wishlist" className="text-2xl hover:text-green-700">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="/user" className="text-2xl hover:text-green-700">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="/signin" className="bg-green-700 text-green-100 py-2 px-4 rounded-lg text-sm font-bold hover:bg-green-800 hover:text-white">
            Login/Signup
          </a>
        </div>
      </ul>
      <div className="hidden md:flex items-center gap-x-6">
        <a href="/cart" className="text-2xl hover:text-green-700">
          <IconWithBadge icon={faShoppingCart} badgeCount={3} />
        </a>
        <a href="/wishlist" className="ml-2 text-2xl hover:text-green-700">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="/user" className="ml-2 text-2xl hover:text-green-700">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="/signin" className="ml-2 bg-green-700 text-green-100 py-2 px-4 rounded-lg text-sm font-bold hover:bg-green-800 hover:text-white">
          Login/Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
