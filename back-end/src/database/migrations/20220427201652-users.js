'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'customer'
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
