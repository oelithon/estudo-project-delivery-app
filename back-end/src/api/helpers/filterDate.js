const filterDate = (paramDate) => {
  const [month, date, year] = paramDate.toLocaleDateString('en-US').split('/');
  return `${date}/${month}/${year}`;
};

const filterArrayDate = (orders) => {
  const ordersWhitDate = orders.map((obj) => {
    const order = obj.dataValues;
    order.date = filterDate(order.saleDate);
    return order;
  });
  return ordersWhitDate;
};

module.exports = {
  filterDate,
  filterArrayDate,
};