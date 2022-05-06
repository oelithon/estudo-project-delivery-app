const productDataProcessing = (param) => {
  const product = param;
  product.products.forEach((obj, index) => {
    const { quantity } = obj.SaleProduct;
    product.products[index].dataValues.quantity = quantity;
    delete product.products[index].dataValues.SaleProduct;
  });
  return product;
};

module.exports = productDataProcessing;
