'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cocktail_Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewRating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      reviewBody: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      cocktailId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Cocktails"}
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Users"}
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
    return queryInterface.dropTable('Cocktail_Reviews');
  }
};
