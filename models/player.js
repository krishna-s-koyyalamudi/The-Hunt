/**
*  player model
*  explains each attribute in a competition.
*
* @author Rajashekar Gande
*
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
    sequelize.define('player', {
        playerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notEmpty: true
        },
        teamId: {
            type: DataTypes.INTEGER,
            references: {
                model: "team",
                foreignKey: "teamId"
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                foreignKey: "userId"
            }
        },
       
        datetimeInvited: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('datetimeInvited')).format('MM/DD/YYYY hh:mm:ss');
            }
        },
        datetimeAccepted: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('datetimeAccepted')).format('MM/DD/YYYY hh:mm:ss');
            }
        },
        datetimeRejected: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('datetimeRejected')).format('MM/DD/YYYY hh:mm:ss');
            }
        },
        datetimeDeleted: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('datetimeDeleted')).format('MM/DD/YYYY hh:mm:ss');
            }
        },
    });
    // player.associate = function (models) {
        // associations can be defined here
    // };
    //    return player;
};