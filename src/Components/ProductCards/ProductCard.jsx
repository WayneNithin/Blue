import React from 'react';
import './ProductCard.css'; 
import { Link } from 'react-router-dom';
// import productdetail from './ProductDetail';
import { products } from '../../data/products';


function ProductcardGrid() {
  return (
    <div className="product-grid">

      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="bb-pro-box">
            <div className="bb-pro-img">
              <span className="flags"><span>New</span></span>
              <div className="inner-img">
                <img className="main-img" src={product.img} alt={product.name} />
                <img className="hover-img" src={product.backImg} alt={product.name} />
              </div>
              <ul className="bb-pro-actions">
                <li><button type="button"><i className="ri-heart-line"></i></button></li>
                <li><button type="button"><i className="ri-eye-line"></i></button></li>
                <li><button type="button"><i className="ri-repeat-line"></i></button></li>
                <li><button type="button"><i className="ri-shopping-bag-4-line"></i></button></li>
              </ul>
            </div>
            <div className="bb-pro-contact">
              <div className="bb-pro-subtitle">
                <a href="#">{product.category}</a>
                <span className="bb-pro-rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </span>
              </div>
                <h4 className="bb-pro-title">
                  <Link to={`/product/${product.id}`}>{product.name}</Link> 
              </h4>
              <div className="bb-price">
                <div className="inner-price">
                  <span className="new-price">${product.price}</span>
                  <span className="old-price">${product.oldPrice}</span>
                </div>
                <span className="last-items">1 Pack</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductcardGrid;

