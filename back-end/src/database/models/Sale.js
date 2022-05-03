const validateDeliveryAddress = {
  notNull: true, notEmpty: true, len: [0, 100]
};
const validateDeliveryNumber = {
  notNull: true, notEmpty: true, len: [0, 50]
};
const validateStatus = {
  notNull: true, notEmpty: true, len: [0, 50]
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

      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      seller_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      total_price: {
        allowNull: false,
        type: DataTypes.FLOAT(9, 2),
      },

      delivery_address: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateDeliveryAddress,
      },

      delivery_number: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateDeliveryNumber,
      },

      sale_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      status: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateStatus,
      },
    },

    {
      timestamps: false,

      tableName: 'sales',

    });

  return Sale;
};
