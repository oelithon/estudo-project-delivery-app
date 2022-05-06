// Essa página está sendo usada somente para visualizar os componentes criados

import React, { useEffect } from 'react';
import '../styles/checkout.css';

function Checkout() {

  //--------Simulando o localStorage------//

  const myProducts = JSON.stringify([
    {
      name: 'Becks 330ml',
      price: 4.49,
      quantity: 2
    },
    {
      name: 'Becks 330ml',
      price: 4.49,
      quantity: 2
    },
    {
      name: 'Becks 330ml',
      price: 4.49,
      quantity: 2
    },
  ]);

  useEffect(() => {
    localStorage.setItem('myProducts', myProducts)
  }, []);

  //--------Simulando o localStorage------//

  return (
    <div>
      <p>Página de Checkout</p>
    </div>
  );
}

export default Checkout;
