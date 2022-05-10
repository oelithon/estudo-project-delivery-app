import React from 'react';
import Counter from '../Counter';
import './style.css';
import imgURL from './skol_lata_350ml.jpg';

const ProductCard = () => {
  const price = 'R$ 2,20';
  const description = 'Skol 350ml';

  return (
    <div className="ProductCard__div">
      <div className="image-container">
        <img
          src={ imgURL }
          alt="Product logo"
          className="productImage"
          data-testid="17"
        />
      </div>
      <div className="productPrice" data-testid="16">
        { price }
      </div>
      <div className="productDescriptionAndCounter" data-testid="15">
        { description }
        <div className="productCounter">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
