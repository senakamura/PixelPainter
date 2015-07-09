'use strict';
module.exports = function(sequelize, DataTypes) {
  var Drawings = sequelize.define('Drawings', {
    data: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Drawings;
};