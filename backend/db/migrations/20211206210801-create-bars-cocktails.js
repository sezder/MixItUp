"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Bars_Cocktails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cocktailId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Cocktails" },
      },
      barId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Bars" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Bars_Cocktails");
  },
};
