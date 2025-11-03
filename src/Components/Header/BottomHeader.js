import React from "react";
import logo from '../../assets/logo.png';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import './BottomHeader.css';

function BottomHeader() {
  return (
    <div className="top-bottom-wrapper">
      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="Blueberry Logo" className="logo-img" />
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
        />
        <button type="button" className="search-btn">
          <FaSearch />
        </button>
      </div>

      {/* User & Cart */}
      <div className="user-cart-section">
        <div className="user-dropdown">
          <div className="user-toggle">
            <FaUser />
            <span className="user-label">
              Login <i className="fa fa-angle-down"></i>
            </span>
          </div>
          <ul className="dropdown-menu">
            <li><a href="/register">Register</a></li>
            <li><a href="/checkout">Checkout</a></li>
            <li className="divider"></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-label">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
