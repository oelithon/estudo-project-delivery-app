module.exports = (sequelize,
  DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct',
    {
      sale_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },

    {
      timestamps: false,

      tableName: 'sales_products',

    });

  return SaleProduct;
};
