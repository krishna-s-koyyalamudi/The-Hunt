/**
*  competition model
*  explains each attribute in a competition.
*
* @author Rajeshwari Rudravaram
*
* @author Sai Krishna
*
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
    sequelize.define('competition', {
        competitionName: {
            type: DataTypes.STRING,
            primaryKey: true,
            notEmpty: true
        },
        creatorUserId: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                foreignKey: "userId"
            }
        },
        questId: {
            type: DataTypes.INTEGER,
            references: {
                model: "quest",
                foreignKey: "questId"
            }
        },
        dateTimeCreated: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('dateTimeCreated')).format('MM/DD/YYYY hh:mm:ss');
            }
        },
        startDateTime: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('startDateTime')).format('MM/DD/YYYY hh:mm:ss');
            }
        },
        endDateTime: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('endDateTime')).format('MM/DD/YYYY hh:mm:ss');
            }
        },
    });
    // competition.associate = function (models) {
        // associations can be defined here
    // };
    //    return competition;
};
