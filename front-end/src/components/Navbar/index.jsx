import React, { useEffect, useState } from 'react';
import './style.css';

const Navbar = () => {
  const usertype = 'client';
  const username = 'Rafael';
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
  }, []);

  return (
    <header className="Navbar__header">
      <div>
        <button className="Navbar__button--home" type="button">ZECA DELIVERY</button>
      </div>
      <button className="Navbar__button--items" type="button">{ items.item1 }</button>
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

export default Navbar;
