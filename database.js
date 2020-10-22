const md5 = require('md5'); // hashes passwords 
const sqlite3 = require('sqlite3').verbose();
// const dbfile = 'hunt.db';
// const dbpath = path.join(__dirname, 'database', dbfile);

const DBSOURCE = "hunt.db"
// create Database object representing the connection to the SQLite database
let sqldb = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    }
    else {
        console.log('Connected to the hunt database.');
    }
    // seed relational data
    sqldb.run('CREATE TABLE IF NOT EXISTS user (email text,password text, userId PRIMARY KEY AUTOINCREMENT)');
    console.log("Table user created.")
    sqldb.run('CREATE TABLE IF NOT EXISTS team (teamId INTEGER PRIMARY KEY AUTOINCREMENT, teamName text, creatorUserId INTEGER, FOREIGN KEY (creatorUserId) REFERENCES user(userId))');
    console.log("Table team created.")
    let sql1 = 'INSERT INTO team (teamName) VALUES (?)';
    sqldb.run(sql1, ["sunRisers"]);
    sqldb.run(sql1, ["royalChallengers"]);
    console.log("data into team inserted")
    sqldb.run('CREATE TABLE IF NOT EXISTS quest(questId INTEGER PRIMARY KEY AUTOINCREMENT, questName text, questCreatorUserId INTEGER,longitude text, latitude text, FOREIGN KEY (questCreatorUserId) REFERENCES user(userId))');
    console.log("table quest created")
    sqldb.run('CREATE TABLE IF NOT EXISTS competition(competitionId INTEGER PRIMARY KEY AUTOINCREMENT, competitionName text, competitionCreatorUserId INTEGER, competitionQuestId INTEGER, startDateTime TEXT, endDateTime TEXT,FOREIGN KEY (competitionCreatorUserId) REFERENCES user(userId), FOREIGN KEY (competitionQuestId) REFERENCES quest(questId))');
    console.log("table competition created")
    sqldb.run('CREATE TABLE IF NOT EXISTS player (playerId INTEGER PRIMARY KEY AUTOINCREMENT, playerTeamId INTEGER REFERENCES team(teamId) NOT NULL, playerUserId INTEGER REFERENCES user(userId), playerName text , datetimeInvited TEXT, datetimeAccepted TEXT, datetimeRejected TEXT, datetimeDeleted  TEXT)');
    console.log("table player created")
    sqldb.run('CREATE TABLE IF NOT EXISTS competitionTeamMapping (competitionId INTEGER PRIMARY KEY, competitionTeamId INTEGER REFERENCES team (teamId), datetimeInvited TEXT , datetimeAccepted TEXT, datetimeRejected TEXT , datetimeDeleted TEXT)');
    console.log("table competitionTeamMapping created")
    sqldb.run('CREATE TABLE IF NOT EXISTS location(locationId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,locationQuestId INTEGER REFERENCES quest(questId) NOT NULL, locationLatitude TEXT NOT NULL, locationLongitude TEXT NOT NULL, locationValue INTEGER NOT NULL)');
    console.log("table location created")
});

// // close the database connection
// sqldb.close();
// console.log('Close the database');


module.exports = sqldb



