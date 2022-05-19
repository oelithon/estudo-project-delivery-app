import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const DeliveryCard = (props) => {
  const { id, status, date, price, role } = props;
  const [deliveryStatusClassName, setDeliveryStatusClassName] = useState('ENTREGUE');

  useEffect(() => {
    setDeliveryStatusClassName(status);
  }, [status]);

  return (
    <Link to={ `/${role}/orders/${id}` } className="link-delivery-card">
      <div className="DeliveryCard">
        <div className="DeliveryCard--order">
          <div className="DeliveryCard--order--pedido">Pedido</div>
          <div
            className="DeliveryCard--order--number"
            data-testId={ `${role}_orders__element-order-id-${id}` }
          >
            { id }
          </div>
        </div>

        <div
          className={ `DeliveryCard--status ${deliveryStatusClassName}` }
          data-testId={ `${role}_orders__element-delivery-status-${id}` }
        >
          {status}
        </div>

        <div className="DeliveryCard--dateAndPrice">
          <div
            className="DeliveryCard--dateAndPrice--date"
            data-testId={ `${role}_orders__element-order-date-${id}` }
          >
            { date }
          </div>
          <div
            className="DeliveryCard--dateAndPrice--price"
            data-testId={ `${role}_orders__element-card-price-${id}` }
          >
            { price ? price.replace('.', ',') : price }
          </div>
        </div>
      </div>
    </Link>
  );
};

DeliveryCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.func,
}.isRequired;

export default DeliveryCard;
