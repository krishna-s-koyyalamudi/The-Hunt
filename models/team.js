/**
 * Team Model
 * It states the details fucntionality of team
 * 
 * @author Rohith Chittimalla
 * 
 */

var team = {};
module.exports = (sequelize, DataTypes) => {
    team= sequelize.define('team', {
        teamId: {
            type: DataTypes.INTEGER,
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
           
    });
    module.exports = team;

}


