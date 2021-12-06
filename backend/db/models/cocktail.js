'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define('Cocktail', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image_url: DataTypes.TEXT,
    recipe_url: DataTypes.TEXT
  }, {});
  Cocktail.associate = function(models) {
    Cocktail.hasMany(models.Cocktail_Review, { foreignKey: "cocktail_id" });
  };
  return Cocktail;
};
