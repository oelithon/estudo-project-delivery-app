import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar, ProductCard } from '../components';
import '../styles/Products.css';
import formatNumbertoBRL from '../helpers/formatNumberToBRL';
import { readUser } from '../helpers/localStorage';

const Products = () => {
  const [products, setProducts] = useState(['']);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:3001/customer/products', {
      headers: { Authorization: process.env.REACT_APP_TOKEN },
    })
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(JSON.stringify(error)));
    const userInfo = readUser();
    setUsername(userInfo.name);
    setUserRole(userInfo.role);
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
      <div data-testid="21" className="TotalPrice">
        Ver carrinho:
        <Link to="/customer/checkout" data-testid="79">
          { formatNumbertoBRL(cart) }
        </Link>
      </div>
    </>
  );
};

export default Products;
