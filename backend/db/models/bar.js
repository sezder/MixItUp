'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define('Bar', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    
  }, {});
  Bar.associate = function(models) {
    const columnMapping = {
      through: 'Bars_Cocktails',
      otherKey: 'cocktailId',
      foreignKey: 'barId'
    }
    Bar.belongsToMany(models.Cocktail, columnMapping);

  };
  return Bar;
};
