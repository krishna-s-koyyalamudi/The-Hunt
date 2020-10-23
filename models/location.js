/**
*  location model
*  explains each attribute in location entity.
*
* @author Rajeshwari Rudravaram
*
* @author Sai krishna
*
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
const location= sequelize.define('location', {
        locationId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
             allowNull: false
        },
     questId: {
            type: DataTypes.INTEGER,
            references:{
              model: "quest",
              foreignKey: "questId"},
        },
        locationLatitude: {
          type: DataTypes.DECIMAL(10,8),
          allowNull: false   
      },
      
         
         
});
      location.associate = function(models) {
           // associations can be defined here
        };
             return location;
               };
