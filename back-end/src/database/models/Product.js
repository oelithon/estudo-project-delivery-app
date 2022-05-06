const validateName = {
  notNull: true, notEmpty: true, len: [0, 100]
};
const validateURL = {
  notNull: true, notEmpty: true, len: [0, 200], default: '',
};

module.exports = (sequelize,
  DataTypes) => {
  const Product = sequelize.define('Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateName,
      },

      price: {
        allowNull: false,
        type: DataTypes.FLOAT(4, 2),
      },

      url_image: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateURL,
      },
    },

    {
      timestamps: false,
      underscored: true,
      tableName: 'products',

    });

  return Product;
};
