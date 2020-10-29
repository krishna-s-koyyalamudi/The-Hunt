/**
*  playerScore model
*  explains each attribute in location entity.
*
* @author Rajashekar Gande
*
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  sequelize.define('playerScore', {
    playerScoreId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    playerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "player",
        foreignKey: "playerId"
      },
    },
    locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "location",
          foreignKey: "locationId"
        },
      },
      datetimeScored: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('datetimeScored')).format('MM/DD/YYYY hh:mm:ss');
        }
    },


  });
  // playerScore.associate = function (models) {
  //   associations can be defined here
  // };
  // return playerScore;
};
