const validateName = {
  notNull: true, notEmpty: true, len: [12, 100]
};
const validateEmail = {
  notNull: true, notEmpty: true, isEmail: true, len: [0, 100]
};
const validatePassword = {
  notNull: true, notEmpty: true, len: [6, 32]
};
const validateRole = {
  notEmpty: true, len: [0, 20]
};

module.exports = (sequelize,
  DataTypes) => {
  const User = sequelize.define('User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateName
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validateEmail
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: validatePassword
      },

      role: {
        type: DataTypes.STRING,
        validate: validateRole,
        defaultValue: 'customer'
      },
    },

    {
      timestamps: false,

      tableName: 'users',

    });
  User.associate = (models) => {
    User.hasMany(models.Sale,
      { foreignKey: 'user_id', as: 'roleUser' },
      { foreignKey: 'sale_id', as: 'roleSale' });
  }
  return User;
};
