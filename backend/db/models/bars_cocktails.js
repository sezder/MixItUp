'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bars_Cocktails = sequelize.define('Bars_Cocktails', {
    cocktailId: DataTypes.INTEGER,
    barId: DataTypes.INTEGER
  }, {});
  Bars_Cocktails.associate = function(models) {
    // associations can be defined here
  };
  return Bars_Cocktails;
};
