import React from 'react';
import './style.css';

const DeliveryCard = () => (
  <div className="DeliveryCard">

    <div className="DeliveryCard--order">
      <div className="DeliveryCard--order--pedido">Pedido</div>
      <div className="DeliveryCard--order--number">0001</div>
    </div>

    <div className="DeliveryCard--status">ENTREGUE</div>

    <div className="DeliveryCard--dateAndPrice">
      <div className="DeliveryCard--dateAndPrice--date">DD/MM/AA</div>
      <div className="DeliveryCard--dateAndPrice--price">R$ 00,00</div>
    </div>

  </div>
);

export default DeliveryCard;
