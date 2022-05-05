const filterDate = (paramDate) => {
  const [month, date, year] = paramDate.toLocaleDateString('en-US').split('/');
  return `${date}/${month}/${year}`;
};

module.exports = filterDate;