/**
*  location model
*  explains each attribute in location entity.
*
* @author Rajeshwari Rudravaram
* 
*
*/
'use strict';
var location = {};
module.exports = (sequelize, DataTypes) => {
    location= sequelize.define('location', {
        locationId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
             notEmpty: true
        },
     questId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },{}); 
               location.associate = function(models) {
              // associations can be defined here
                     };
               return location;
               };
