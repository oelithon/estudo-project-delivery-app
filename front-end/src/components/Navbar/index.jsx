import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import { removeLocalStorage } from '../../helpers/localStorage';

const Navbar = ({ usertype, username }) => {
  const [items, setItems] = useState({ item1: '', item2: '' });
  const [menuLink, setMenuLink] = useState('/');
  const [prefix, setPrefix] = useState('customer_products__');
  const [secondLink, setSecondLink] = useState('/');

  useEffect(() => {
    switch (usertype) {
    case 'admin':
      setItems({ item1: 'Gerenciar usuários' });
      setMenuLink('/users');
      break;
    case 'seller':
      setItems({ item1: 'Pedidos' });
      setMenuLink('/customer/orders/:id');
      break;
    case 'customer':
      setItems({ item1: 'Produtos', item2: 'Pedidos' });
      setMenuLink('/customer/products');
      setSecondLink('/customer/orders/:id');
      setPrefix('customer_products__');
      break;
    default:
      break;
    }
  }, [usertype]);

  return (
    <header className="Navbar__header">
        <Link to="/">
          <button
            className="Navbar__button--home"
            type="button"
          >
            ZECA DELIVERY
          </button>
        </Link>
        <Link to={ menuLink }>
          <button
            data-testid={ `${prefix}element-navbar-link-products` }
            className="Navbar__button--items"
            type="button"
          >
            {items.item1}
          </button>
        </Link>
        <Link to={ secondLink }>
          <button
            data-testid={ `${prefix}element-navbar-link-orders` }
            className="Navbar__button--items"
            type="button"
          >
            { items.item2 }
          </button>
        </Link>
      <div className="Navbar__buttons--exit--username">
        <button
          data-testid={ `${prefix}element-navbar-user-full-name` }
          className="Navbar__button--username"
          type="button"
        >
          { username }
        </button>
        <Link onClick={ () => removeLocalStorage('user') } to="/">
          <button
            data-testid={ `${prefix}element-navbar-link-logout` }
            className="Navbar__button--exit"
            type="button"
          >
            sair
          </button>
        </Link>
      </div>
    </header>
  );
};

Navbar.defaultProps = {
  usertype: 'client',
  username: 'Sem nome',
};

Navbar.propTypes = {
  usertype: PropTypes.string,
  username: PropTypes.string,
};

export default Navbar;
