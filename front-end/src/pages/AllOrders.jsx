import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, DeliveryCard } from '../components';
import { readUser } from '../helpers/localStorage';

function AllOrders() {
  const [orders, setOrders] = useState(['']);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userInfo = readUser();
    setUsername(userInfo.name);
    setUserRole(userInfo.role);

    axios.get('http://localhost:3001/customer/orders', {
      headers: { Authorization: userInfo.token },
    })
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(JSON.stringify(error)));
  }, []);

  return (
    <div>
      <Navbar usertype={ userRole } username={ username } />
      <div>
        { orders.map((order) => (
          <DeliveryCard
            key={ order.id }
            id={ order.id }
            status={ order.status }
            date={ order.date }
            price={ order.totalPrice }
            role={ userRole }
          />
        ))}
      </div>
    </div>
  );
}

export default AllOrders;
