import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';
import './style.css';

const formatNumbertoBRL = (numberToFormat) => (
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numberToFormat)
);

const ProductCard = ({ price, description, imgURL, productId }) => (
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
      { formatNumbertoBRL(price) }
    </div>
    <div className="productDescriptionAndCounter" data-testid="15">
      { description }
      <div className="productCounter">
        <Counter productId={ productId } price={ price } />
      </div>
    </div>
  </div>
);

ProductCard.defaultProps = {
  price: 'R$ 0,00',
  description: 'Sem descrição',
  imgURL: 'Sem URL',
  productId: 'sem id',
};

ProductCard.propTypes = {
  price: PropTypes.string,
  description: PropTypes.string,
  imgURL: PropTypes.string,
  productId: PropTypes.number,
};

export default ProductCard;
