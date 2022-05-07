function useCurrency(value, currency) {
  const fixedValue = value.toFixed(2);
  const modifiedValue = fixedValue.replace('.', ',');
  const newCurrency = `${currency} ${modifiedValue}`;

  return newCurrency;  
}

export default useCurrency;