import React from 'react';
import { useParams } from 'react-router-dom';
// import ProductCard from './';
import { products } from '../../data/products';



function ProductDetail() {
  const { id } = useParams(); 
  const product = products.find(p => p.id === parseInt(id)); 

  if (!product) {
    return <div class="section-detail"><h2 class="bb-title">New <span>Arrivals</span></h2><p>Shop online for new arrivals and get free shipping!</p></div>;
  }

  return (
    <div className="product-detail">
      <h2>{products.name}</h2>
      <img src={products.img} alt={product.name} />
      <p>Category: {products.category}</p>
      <p>Price: ${products.price}</p>
      <p>Old Price: ${products.oldPrice}</p>
    </div>
  );
}

export default ProductDetail;