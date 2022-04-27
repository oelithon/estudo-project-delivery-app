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

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SaleProduct;
};
