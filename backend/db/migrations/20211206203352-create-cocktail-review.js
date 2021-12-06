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
      review_rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      review_body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      cocktail_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Cocktails"}
      },
      user_id: {
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
