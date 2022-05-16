import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar, ProductCard } from '../components';
import '../styles/Products.css';
import { readUser, savePrice } from '../helpers/localStorage';

const Products = () => {
  const [products, setProducts] = useState(['']);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState('0,00');
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = readUser();
    setUsername(userInfo.name);
    setUserRole(userInfo.role);

    axios.get('http://localhost:3001/customer/products', {
      headers: { Authorization: userInfo.token },
    })
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(JSON.stringify(error)));
  }, []);

  useEffect(() => {
    if(cart >= 1) return setDisable(false);
    else setDisable(false);
  }, [cart]);

  const handleClick = () => {
    savePrice(cart);
    if (cart > 0) navigate("/customer/checkout");
  };

  return (
    <>
      <Navbar usertype={ userRole } username={ username } />
      <div className="Products__div">
        {products.map((product) => (
          <ProductCard
            productId={ product.id }
            key={ product.id }
            price={ product.price }
            description={ product.name }
            imgURL={ product.url_image }
            setCart={ setCart }
          />
        ))}
      </div>
      <div
        className="TotalPrice"
      >
        {'Ver carrinho: R$ '}
        <button
          data-testid="customer_products__button-cart"
          onClick={ handleClick }
          type="button"
          disabled={ disable }
        >
          <span data-testid={ `${userRole}_products__checkout-bottom-value` }>
            { cart }
          </span>
        </button>
      </div>
    </>
  );
};

export default Products;
