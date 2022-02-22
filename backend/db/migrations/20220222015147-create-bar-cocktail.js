'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bar_Cocktails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Bars" },
      },
      cocktailId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Cocktails" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bar_Cocktails');
  }
};
