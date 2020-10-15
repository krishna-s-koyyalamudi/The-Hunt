/**
 * Team Model
 * It states the details fucntionality of team
 * 
 * @author Rohith Chittimalla
 * 
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
    var team= sequelize.define('team', {
        teamId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            primaryKey: true,
            allowIncrement: true
            
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creatorUserId: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                foreignKey: "userid",}

            },
           
            
           
    });
 

};
return team;




