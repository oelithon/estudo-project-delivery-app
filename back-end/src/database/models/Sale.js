const validateDeliveryAddress = {
  notNull: true, notEmpty: true, len: [0, 100]
};
const validateDeliveryNumber = {
  notNull: true, notEmpty: true, len: [0, 50]
};
const validateStatus = {
  notEmpty: true, len: [0, 50]
};

module.exports = (sequelize,
  DataTypes) => {
  const Sale = sequelize.define('Sale',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      sellerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      totalPrice: {
        allowNull: false,
        type: DataTypes.FLOAT(9, 2),
      },

      deliveryAddress: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateDeliveryAddress,
      },

      deliveryNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateDeliveryNumber,
      },

      saleDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      status: {
        type: DataTypes.STRING,
        validate: validateStatus,
        defaultValue: 'Pendente',
      },
    },

    {
      underscored: true,
      timestamps: false,
      tableName: 'sales',

    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Sale.belongsTo(models.User, { as: 'seller', foreignKey: 'sellerId' });
  };

  return Sale;
};
