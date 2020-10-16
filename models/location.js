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
            references:{
              model: "quest",
              primaryKey: "questId"},
        },
        latitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }
          },
        longitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
          },
         {
          validate: {
            bothCoordsOrNone() {
              if ((this.latitude === null) !== (this.longitude === null)) {
                throw new Error('Require either both latitude and longitude or neither')
              }
            }
          }
});
      location.associate = function(models) {
           // associations can be defined here
        };
             return location;
               };
