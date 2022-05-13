import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';
import formatNumbertoBRL from '../../helpers/formatNumberToBRL';
import './style.css';
import { readUser } from '../../helpers/localStorage';

const userRole = readUser().role;

const ProductCard = ({ setCart, price, description, imgURL, productId }) => (
  <div className="ProductCard__div">
    <div className="image-container">
      <img
        src={ imgURL }
        alt="Product logo"
        className="productImage"
        data-testid={ `${userRole}_products__img-card-bg-image-${productId}` }
      />
    </div>
    <div
      className="productPrice"
      data-testid={ `${userRole}_products__element-card-price-${productId}` }
    >
      {formatNumbertoBRL(price)}
    </div>
    <div
      className="productDescriptionAndCounter"
      data-testid={ `${userRole}_products__element-card-title-${productId}` }
    >
      {description}
      <div className="productCounter">
        <Counter setCart={ setCart } productId={ productId } price={ price } />
      </div>
    </div>
  </div>
);

ProductCard.defaultProps = {
  price: 'R$ 0,00',
  description: 'Sem descrição',
  imgURL: 'Sem URL',
  productId: 0,
};

ProductCard.propTypes = {
  price: PropTypes.string,
  description: PropTypes.string,
  imgURL: PropTypes.string,
  setCart: PropTypes.func.isRequired,
  productId: PropTypes.number,
};

export default ProductCard;
