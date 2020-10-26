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

    // delete all existing tables in reverse order of creation...

    // delete competitionTeamMapping
    sqldb.run('DROP Table IF EXISTS competitionTeamMapping');
    console.log("Table competitionTeamMapping has dropped")

    // delete playerScore
    sqldb.run('DROP Table IF EXISTS playerScore');
    console.log("Table playerScore has dropped")

    // delete player
    sqldb.run('DROP Table IF EXISTS player');
    console.log("Table player has dropped")

     // delete team
     sqldb.run('DROP Table IF EXISTS team');
     console.log("Table team has dropped")

     // delete clue
    sqldb.run('DROP Table IF EXISTS clue');
    console.log("Table clue has dropped")

    // delete location
    sqldb.run('DROP Table IF EXISTS location');
    console.log("Table location has dropped")

    // delete competition
    sqldb.run('DROP Table IF EXISTS competition');
    console.log("Table competition has dropped")

    // delete quest
    sqldb.run('DROP Table IF EXISTS quest');
    console.log("Table quest has dropped")

    // delete user
    sqldb.run('DROP Table IF EXISTS user');
    console.log("Table user has dropped")

    // create tables in order of dependencies .......

    // create user 

    

   

    

    
    sqldb.run('CREATE TABLE IF NOT EXISTS user (email text,password text, userId INTEGER PRIMARY KEY AUTOINCREMENT)');
    console.log("Table user created.")

    // create team / players
    sqldb.run('CREATE TABLE IF NOT EXISTS team (teamName text, teamId INTEGER PRIMARY KEY AUTOINCREMENT)');
    console.log("Table team created.")
    // let sql1 = 'INSERT INTO team (teamName) VALUES (?)';
    // sqldb.run(sql1, ["sunRisers"]);
    // sqldb.run(sql1, ["royalChallengers"]);
    // console.log("data into team inserted")
     
    // create quest
    sqldb.run('CREATE TABLE IF NOT EXISTS quest(questId INTEGER PRIMARY KEY AUTOINCREMENT, questName text, questCreatorUserId INTEGER,longitude text, latitude text, FOREIGN KEY (questCreatorUserId) REFERENCES user(userId))');
    console.log("table quest created")
// create location
    sqldb.run('CREATE TABLE IF NOT EXISTS location(locationId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,locationQuestId INTEGER REFERENCES quest(questId) NOT NULL, locationLatitude TEXT NOT NULL, locationLongitude TEXT NOT NULL, locationValue INTEGER NOT NULL)');
    console.log("table location created")
// create clue
    sqldb.run('CREATE TABLE IF NOT EXISTS clue(clueId INTEGER NOT NULL UNIQUE, clueLocationId INTEGER NOT NULL REFERENCES location(locationId), clueSortOrder INTEGER, clueString TEXT)');
    console.log("table clue created")
    // create competition 
    sqldb.run('CREATE TABLE IF NOT EXISTS competition(competitionId INTEGER PRIMARY KEY AUTOINCREMENT, competitionName text, competitionCreatorUserId INTEGER, competitionQuestId INTEGER, startDateTime TEXT, endDateTime TEXT,FOREIGN KEY (competitionCreatorUserId) REFERENCES user(userId), FOREIGN KEY (competitionQuestId) REFERENCES quest(questId))');
    console.log("table competition created")
       // create competitionTeamMapping 
    sqldb.run('CREATE TABLE IF NOT EXISTS competitionTeamMapping (competitionId INTEGER PRIMARY KEY, competitionTeamId INTEGER REFERENCES team (teamId), datetimeInvited TEXT , datetimeAccepted TEXT, datetimeRejected TEXT , datetimeDeleted TEXT)');
    console.log("table competitionTeamMapping created")
     // create player
     sqldb.run('CREATE TABLE IF NOT EXISTS player (playerId INTEGER PRIMARY KEY AUTOINCREMENT, playerTeamId INTEGER REFERENCES team(teamId) NOT NULL, playerUserId INTEGER REFERENCES user(userId), playerName text , datetimeInvited TEXT, datetimeAccepted TEXT, datetimeRejected TEXT, datetimeDeleted  TEXT)');
     console.log("table player created") 
    // create playerScore
    sqldb.run('CREATE TABLE IF NOT EXISTS playerScore(playerScoreId INTEGER NOT NULL, playerOfPlayerId INTEGER REFERENCES player(playerId), playerOfLocationId INTEGER REFERENCES location(locationId))');
    console.log("table playerScore created")
    
    

// seed relational data
    let sql = 'INSERT INTO user(email, password) VALUES (?,?)'
    sqldb.run(sql,['puneethannam@gmail.com', md5('puneeth')]) 
});

// // close the database connection
// sqldb.close();
// console.log('Close the database');


module.exports = sqldb



