/**
 * Team Model
 * It states the details fucntionality of team
 * 
 * @author Puneeth Annam and Rohith Chittimalla
 * Initially it was created by Rohith Chittimalla but later it is upadated by Puneeth Annam after re-grouping of tasks
 * 
 * 
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
  sequelize.define('team', {
        teamId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            primaryKey: true,
            allowIncrement: true

        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [3,10]
            }
        },
        creatorUserId: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: "user",
            //     foreignKey: "userId"
            // }

        }   
    });
// team.associate = function(models){
//     team.belongsTo(user);
// }
//     return team;

};





