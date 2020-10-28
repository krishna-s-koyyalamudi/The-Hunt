
/**
 * Quest Model
 * Creatiion of quests
 * 
 * @author nookaRaju
 */

// var quest = {};
module.exports = (sequelize, DataTypes) => {
    sequelize.define('quest', {
       questId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           allowIncrement: true
       },
       questName: {
           type: DataTypes.STRING,
           validate: {
             len: [3,10]
           },
           allowNull: false,
           unique: {
            args: 'questName',
            msg: 'The questName is already taken!'
           },
           return: true
       },
       creatorUserId: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            primaryKey: "userid"},

        },
        dateTimeCreated: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('dateTimeCreated')).format('MM/DD/YYYY');
            }
        },
        dateTimeLastEdited: {
            type: DataTypes.DATE,
            get(){
                return moment(this.getDataValue('dateTimeLastEdited')).format('MM/DD/YYYY');

            }

        },
        latitude: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }
          },
          longitude: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
          },
        }, {
          validate: {
            bothCoordsOrNone() {
              if ((this.latitude === null) !== (this.longitude === null)) {
                throw new Error('Require either both latitude and longitude or neither')
              }
            }
          }

    });
  //  module.exports = quest;
}
