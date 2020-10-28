/**
 *  Model index.js
 *
 */

const Sequelize = require('sequelize');

//const env = process.env.NODE_ENV || 'development';
//const config = require('../config/config.json')[env];
const config = require('../config/config.json')['development'];


const db = new Sequelize(config);

// user
require('./user')(db, Sequelize.DataTypes);

// team
require('./team')(db, Sequelize.DataTypes);

// quest
require('./quest')(db, Sequelize.DataTypes);

//competition
//require('./competition')(db, Sequelize.DataTypes);

//location
//require('./location')(db, Sequelize.DataTypes);

// clue
//require('./clue')(db, Sequelize.DataTypes);

//player
// require('./player')(db, Sequelize.DataTypes);

//competitionTeamMapping
// require('./competitionTeamMapping')(db, Sequelize.DataTypes);

//playerScore
// require('./palyerScore')(db, Sequelize.DataTypes);
 module.exports=db;