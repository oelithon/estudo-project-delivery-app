import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, ProductCard } from '../components';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState(['']);

  useEffect(() => {
    axios.get('http://localhost:3001/customer/products', {
      headers: { Authorization: process.env.REACT_APP_TOKEN },
    })
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(JSON.stringify(error)));
  }, []);

  const usertype = 'client';
  const username = 'Rafael';

  return (
    <>
      <Navbar usertype={ usertype } username={ username } />
      <div className="Products__div">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            price={ product.price }
            description={ product.name }
            imgURL={ product.url_image }
          />
        ))}
      </div>
    </>
  );
};

export default Products;
