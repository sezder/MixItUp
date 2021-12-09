"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define(
    "Cocktail",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.TEXT,
      recipeUrl: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Cocktail.associate = function (models) {
    Cocktail.hasMany(models.Cocktail_Review, { foreignKey: "cocktailId" });
    const columnMapping = {
      through: "Bars_Cocktails",
      otherKey: "barId",
      foreignKey: "cocktailId",
    };
    Cocktail.belongsToMany(models.Bar, columnMapping);
    Cocktail.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Cocktail;
};
