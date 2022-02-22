'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar_Cocktail = sequelize.define('Bar_Cocktail', {
    barId: DataTypes.INTEGER,
    cocktailId: DataTypes.INTEGER
  }, {});
  Bar_Cocktail.associate = function(models) {
    // associations can be defined here
  };
  return Bar_Cocktail;
};
