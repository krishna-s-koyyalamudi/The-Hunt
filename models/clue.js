      /**
 * Clues Model
 * Creatiion of Clues
 * 
 * @author nookaRaju
 */

var clues = {};
module.exports = (sequelize, DataTypes) => {
    sequelize.define('clue', {
        clueId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowIncrement: true
        },
clueLocationId: {
    type: DataTypes.INTEGER,
   references: {
       Model: "location",
       primaryKey: "locationId"}
   },

   clueString : {
       type: DataTypes.STRING(200),
       allowNull: false
   
   },
   clueSortOrder: {
       type: DataTypes.INTEGER,
       allowNull: false,
       order: ['clueSortOrder', 'ASC'] // Sorts by COLUMN_NAME in ascending order;
    }
});
 // clues.associate = function(models) {
 // };
 // return clues;
    
};





