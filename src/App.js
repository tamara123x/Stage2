
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Routes/Home';
import CheckoutPage from './Routes/CheckoutPage';
import Checkout from './Routes/Checkout';
import Cart from './Routes/Cart';
import ProductCard from './Routes/ProductCard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/ProductCard" element={<ProductCard />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
       
      </Router>
  );
}

export default App;

