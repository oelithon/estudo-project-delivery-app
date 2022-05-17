module.exports = (sequelize,
  DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct',
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      productId: {
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
      underscored: true,
      tableName: 'salesProducts',

    });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
      
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    // models.Sale.hasMany(models.SaleProduct, {
    //   as: 'saleProducts',
    //   foreignKey: 'sale_id',
      
    // });
  };

  return SaleProduct;
};
