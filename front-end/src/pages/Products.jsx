import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar, ProductCard } from '../components';
import '../styles/Products.css';
import formatNumbertoBRL from '../helpers/formatNumberToBRL';
import { readUser, savePrice } from '../helpers/localStorage';

const Products = () => {
  const [products, setProducts] = useState(['']);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState(0);
  // const userRole = readUser().role;

  useEffect(() => {
    const userInfo = readUser();
    setUsername(userInfo.name);
    setUserRole(userInfo.role);

    axios.get('http://localhost:3001/customer/products', {
      headers: { Authorization: userInfo.token },
    })
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(JSON.stringify(error)));
    console.log('AQUI');
  }, []);

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
        Ver carrinho:
        <Link
          to="/customer/checkout"
          onClick={ () => savePrice(cart) }
          data-testid="customer_products__button-cart"
        >
          <p
            data-testid={ `${userRole}_products__checkout-bottom-value` }
          >
            { formatNumbertoBRL(cart) }
          </p>
        </Link>
      </div>
    </>
  );
};

export default Products;
