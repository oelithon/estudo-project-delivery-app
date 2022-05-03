import React from 'react';
import Counter from '../Counter';
import './style.css';
import imgURL from './skol_lata_350ml.jpg';

const ProductCard = () => {
  const price = 'R$ 2,20';
  const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

  return (
    <div className="ProductCard__div">
      <div className="image-container">
        <img
          src={ imgURL }
          alt="Product logo"
          className="productImage"
        />
      </div>
      <div className="productPrice">
        { price }
      </div>
      <div className="productDescriptionAndCounter">
        { description }
        <div className="productCounter">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
