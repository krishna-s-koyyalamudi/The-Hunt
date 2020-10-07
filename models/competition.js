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
        },
        creatorUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
         questId: {
            type: DataTypes.INTEGER,
            allowNull: false
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
                    return moment(this.getDataValue('startDateTime')).format('MM/DD/YYYY');
                }
                },
                endDateTime: {
                type: DataTypes.DATE,
                get(){
                    return moment(this.getDataValue('endDateTime')).format('MM/DD/YYYY');
                }
                }, 
