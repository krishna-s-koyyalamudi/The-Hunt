/**
*  competition model
*  explains each attribute in a competition.
*
* @author Rajeshwari Rudravaram
* 
*
*/
'use strict';
var competition = {};
module.exports = (sequelize, DataTypes) => {
    competition= sequelize.define('competition', {
        competitionName: {
            type: DataTypes.STRING,
            primaryKey: true,
             notEmpty: true
        },
        creatorUserId: {
            type: DataTypes.INTEGER,
            references:{
              model: "user",
              primaryKey: "userId"},
        },
         questId: {
            type: DataTypes.INTEGER,
            references:{
              model: "quest",
              primaryKey: "questId"},
        },
        dateTimeCreated: {
                type: DataTypes.DATE,
                get() {
                    return moment(this.getDataValue('dateTimeCreated')).format('MM/DD/YYYY');
                }
            },
            startDateTime: {
                type: DataTypes.DATE,
                get(){
                    return moment(this.getDataValue('startDateTime')).format('MM/DD/YYYY hh:mm:ss');
                }
                },
                endDateTime: {
                type: DataTypes.DATE,
                get(){
                    return moment(this.getDataValue('endDateTime')).format('MM/DD/YYYY hh:mm:ss');
                }
                },
            }); 
               competition.associate = function(models) {
              // associations can be defined here
                     };
               return competition;
               };
