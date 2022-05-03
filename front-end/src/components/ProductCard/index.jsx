import React from 'react';
import DropdownMenu from '../DropdownMenu';
import './style.css';

const ProductCard = () => {
  const name = 'SKOL PILSEN';
  return (
    <div className="ProductCard__div">
      <div className="productName">
        {name}
      </div>
      <div className="productNameAndImage">
        <div className="productPrice">PREÇO</div>
        IMAGEM DO PRODUTO
      </div>
      <div className="productQuantityAndDescription">
        <div className="productDescription">Descrição</div>
        <DropdownMenu />
      </div>
    </div>
  );
};

export default ProductCard;
