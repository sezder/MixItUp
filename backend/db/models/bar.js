'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define('Bar', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    menuUrl: DataTypes.TEXT,
    reservationUrl: DataTypes.TEXT,
    mapsUrl: DataTypes.TEXT,
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
