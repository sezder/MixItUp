'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define('Bar', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Bar.associate = function(models) {
    const columnMapping = {
      through: 'Bars_Cocktails',
      otherKey: 'cocktail_id',
      foreignKey: 'bar_id'
    }
    Bar.belongsToMany(models.Cocktail, columnMapping);

  };
  return Bar;
};
