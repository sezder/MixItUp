'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail_Review = sequelize.define('Cocktail_Review', {
    review_rating: DataTypes.INTEGER,
    review_body: DataTypes.TEXT,
    cocktail_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Cocktail_Review.associate = function(models) {
    Cocktail_Review.belongsTo(models.User, { foreignKey: "user_id" });
    Cocktail_Review.belongsTo(models.Cocktail, { foreignKey: "cocktail_id" });
  };
  return Cocktail_Review;
};
