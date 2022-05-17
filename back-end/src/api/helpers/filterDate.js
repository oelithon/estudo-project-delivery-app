const filterDate = (paramDate) => {
  const [month, date, year] = paramDate.toLocaleDateString('en-US').split('/');
  if (month.length === 2) {
    return `${date}/${month}/${year}`;
  }
  return `${date}/0${month}/${year}`;
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
