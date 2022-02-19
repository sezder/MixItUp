"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define(
    "Cocktail",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.TEXT,
      recipeUrl: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Cocktail.associate = function (models) {
    Cocktail.hasMany(models.Cocktail_Review, {
      foreignKey: "cocktailId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Cocktail.hasMany(models.Checkin, { foreignKey: "cocktailId" });
    Cocktail.belongsTo(models.User, { foreignKey: "userId" });
    const columnMapping = {
      through: "Checkin",
      otherKey: "barId",
      foreignKey: "cocktailId",
    };
    Cocktail.belongsToMany(models.Bar, columnMapping);
  };
  return Cocktail;
};
