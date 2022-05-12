import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      <div className="TotalPrice">
        PREÇO TOTAL:
        <br />
        { formatNumbertoBRL(cart) }
      </div>
    </>
  );
};

export default Products;
