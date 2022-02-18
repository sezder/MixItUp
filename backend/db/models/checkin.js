'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    barId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    cocktailId: DataTypes.INTEGER
  }, {});
  Checkin.associate = function(models) {
    // associations can be defined here
  };
  return Checkin;
};