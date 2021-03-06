'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(4, 2),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: '',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')
  }
};
