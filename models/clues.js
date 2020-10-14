      /**
 * Clues Model
 * Creatiion of Clues
 * 
 * @author nookaRaju
 */

var clues = {};
module.exports = (sequelize, DataTypes) => {
    clues = sequelize.define('clues', {
        clueId: {
            type: DataTypes.INTEGERS,
            primaryKey: true,
            allowIncrement: true
        },
locationId: {
    type: this.DataTypes.INTEGERS,
   references: {
       Model: "location",
       primaryKey: "locationId"
   },

   clueString : {
       type: this.DataTypes.String,
       allowNull: false
   
   },
   clueSortOrder: {
       type: this.DataTypes.INTEGERS,
       allowNull: false,
       order: ['clueSortOrder', 'ASC'] // Sorts by COLUMN_NAME in ascending order
   }
}

}