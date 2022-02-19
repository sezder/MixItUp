"use strict";
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define(
    "Checkin",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      content: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      barId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      cocktailId: DataTypes.INTEGER,
    },
    {}
  );
  Checkin.associate = function (models) {
    Checkin.belongsTo(models.Bar, { foreignKey: "barId" });
    Checkin.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Checkin;
};
