"use strict";
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define(
    "Checkin",
    {
      content: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      barId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      cocktailId: DataTypes.INTEGER,
    }
  );
  Checkin.associate = function (models) {
    Checkin.belongsTo(models.Bar, { foreignKey: "barId" });
    Checkin.belongsTo(models.User, { foreignKey: "userId" });
    Checkin.belongsTo(models.Cocktail, { foreignKey: "cocktailId" });
  };
  return Checkin;
};
