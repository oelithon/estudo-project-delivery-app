import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import { removeLocalStorage } from '../../helpers/localStorage';

const Navbar = ({ usertype, username }) => {
  const [items, setItems] = useState({ item1: '', item2: '' });
  const [menuLink, setMenuLink] = useState('/');
  const [prefix, setPrefix] = useState('customer_products__');

  useEffect(() => {
    switch (usertype) {
    case 'admin':
      setItems({ item1: 'Gerenciar usuários' });
      setMenuLink('/'); // Apontar para o link correto quando pronto
      break;
    case 'delivery':
      setItems({ item1: 'Pedidos' });
      setMenuLink('/'); // Apontar para o link correto quando pronto
      break;
    case 'client':
      setItems({ item1: 'Produtos', item2: 'Meus pedidos' });
      setMenuLink('/customer/products');
      setPrefix('customer_products__');
      break;
    default:
      break;
    }
  }, [usertype]);

  return (
    <header className="Navbar__header">
      <div>
        <div
          data-testid={ `${prefix}element-navbar-link-products` }
        >
          <p>PRODUTOS</p>
        </div>
        <div
          data-testid={ `${prefix}element-navbar-link-orders` }
        >
          <p>MEUS PEDIDOS</p>
        </div>
        <Link to="/">
          <button
            className="Navbar__button--home"
            type="button"
          >
            ZECA DELIVERY
          </button>
        </Link>
      </div>
      <Link to={ menuLink }>
        <button
          className="Navbar__button--items"
          type="button"
        >
          { items.item1 }
        </button>
      </Link>
      <button className="Navbar__button--items" type="button">{ items.item2 }</button>
      <div className="Navbar__buttons--exit--username">
        <button
          data-testid={ `${prefix}element-navbar-user-full-name` }
          className="Navbar__button--username"
          type="button"
        >
          { username }
        </button>
        <Link onClick={ () => removeLocalStorage('user') } to="/">
          {/* Apagar local storage */}
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
