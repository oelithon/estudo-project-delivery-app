import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Navbar = ({ usertype, username }) => {
  const [items, setItems] = useState({ item1: '', item2: '' });

  useEffect(() => {
    switch (usertype) {
    case 'admin':
      setItems({ item1: 'Gerenciar usuários' });
      break;
    case 'delivery':
      setItems({ item1: 'Pedidos' });
      break;
    case 'client':
      setItems({ item1: 'Produtos', item2: 'Meus pedidos' });
      break;
    default:
      break;
    }
  }, [usertype]);

  return (
    <header className="Navbar__header">
      <div>
        <Link to="/">
          <button
            className="Navbar__button--home"
            type="button"
          >
            ZECA DELIVERY
          </button>
        </Link>
      </div>
      <button
        className="Navbar__button--items"
        type="button"
      >
        { items.item1 }
      </button>
      <button className="Navbar__button--items" type="button">{ items.item2 }</button>
      <div className="Navbar__buttons--exit--username">
        <button className="Navbar__button--username" type="button">
          { username }
        </button>
        <button className="Navbar__button--exit" type="button">sair</button>
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
