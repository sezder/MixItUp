'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail_Review = sequelize.define('Cocktail_Review', {
    reviewRating: DataTypes.INTEGER,
    reviewBody: DataTypes.TEXT,
    cocktailId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Cocktail_Review.associate = function(models) {
    Cocktail_Review.belongsTo(models.User, { foreignKey: "userId" });
    Cocktail_Review.belongsTo(models.Cocktail, { foreignKey: "cocktailId" });
  };
  return Cocktail_Review;
};
