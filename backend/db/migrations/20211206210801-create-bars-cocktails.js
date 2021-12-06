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
      cocktail_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Cocktails" },
      },
      bar_id: {
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
