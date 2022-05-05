import React from 'react';
import './style.css';

const DeliveryCard = () => {
  const orderNumber = '0001';
  const orderStatus = 'ENTREGUE';
  const dateNow = '05/05/2022';
  const price = 'R$ 10,00';

  return (
    <div className="DeliveryCard">

      <div className="DeliveryCard--order">
        <div className="DeliveryCard--order--pedido">Pedido</div>
        <div className="DeliveryCard--order--number">{orderNumber}</div>
      </div>

      <div className="DeliveryCard--status">{orderStatus}</div>

      <div className="DeliveryCard--dateAndPrice">
        <div className="DeliveryCard--dateAndPrice--date">{dateNow}</div>
        <div className="DeliveryCard--dateAndPrice--price">{price}</div>
      </div>

    </div>
  );
};

export default DeliveryCard;
