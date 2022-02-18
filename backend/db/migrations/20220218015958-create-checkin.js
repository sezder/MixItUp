"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Checkins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      barId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Bars" },
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      cocktailId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Cocktails" },
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
    return queryInterface.dropTable("Checkins");
  },
};
