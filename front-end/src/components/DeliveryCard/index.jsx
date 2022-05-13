import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const DeliveryCard = (props) => {
  const { id, status, date, price } = props;

  const [deliveryStatusClassName, setDeliveryStatusClassName] = useState('ENTREGUE');

  useEffect(() => {
    setDeliveryStatusClassName(status);
  }, [status]);

  return (
    <div className="DeliveryCard">

      <div className="DeliveryCard--order">
        <div className="DeliveryCard--order--pedido">Pedido</div>
        <div
          className="DeliveryCard--order--number"
          data-testId={ `customer_orders__element-order-id-${id}` }
        >
          { id }
        </div>
      </div>

      <div
        className={ `DeliveryCard--status ${deliveryStatusClassName}` }
        data-testId={ `customer_orders__element-delivery-status-${status}` }
      >
        {status}
      </div>

      <div className="DeliveryCard--dateAndPrice">
        <div
          className="DeliveryCard--dateAndPrice--date"
          data-testId={ `customer_orders__element-order-date-${date}` }
        >
          { date }
        </div>
        <div className="DeliveryCard--dateAndPrice--price">{price}</div>
      </div>

    </div>
  );
};

DeliveryCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.func,
}.isRequired;

export default DeliveryCard;
