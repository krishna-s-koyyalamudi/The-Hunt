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

    // delete playerScore
    sqldb.run('DROP Table IF EXISTS playerScore');
    console.log("Table playerScore has dropped")

    // delete player
    sqldb.run('DROP Table IF EXISTS player');
    console.log("Table player has dropped")

    // delete competitionTeamMapping
    sqldb.run('DROP Table IF EXISTS competitionTeamMapping');
    console.log("Table competitionTeamMapping has dropped")
    
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

    // delete team
    
    sqldb.run('DROP Table IF EXISTS team');
    console.log("Table team has dropped")

    // delete user
    sqldb.run('DROP Table IF EXISTS user');
    console.log("User table has dropped")

    // create tables in order of dependencies .......

    // create user

    sqldb.run('CREATE TABLE IF NOT EXISTS user (email text,password text, userId INTEGER PRIMARY KEY AUTOINCREMENT)');
    console.log("Table user created.")

    // create team 
    sqldb.run('CREATE TABLE IF NOT EXISTS team (teamName text, teamId INTEGER PRIMARY KEY AUTOINCREMENT, creatorUserId INTEGER, FOREIGN KEY(creatorUserId) REFERENCES user(userId))');
    console.log("Table team created.")

    // create quest
    sqldb.run('CREATE TABLE IF NOT EXISTS quest(questId INTEGER PRIMARY KEY AUTOINCREMENT, questName text, questCreatorUserId INTEGER,longitude text, latitude text, FOREIGN KEY (questCreatorUserId) REFERENCES user(userId))');
    console.log("table quest created")

    // create competition 
    sqldb.run('CREATE TABLE IF NOT EXISTS competition(competitionId INTEGER PRIMARY KEY AUTOINCREMENT, competitionName text, competitionCreatorUserId INTEGER, competitionQuestId INTEGER, startDateTime TEXT, endDateTime TEXT,FOREIGN KEY (competitionCreatorUserId) REFERENCES user(userId), FOREIGN KEY (competitionQuestId) REFERENCES quest(questId))');
    console.log("table competition created")

    // create location
    sqldb.run('CREATE TABLE IF NOT EXISTS location(locationId INTEGER PRIMARY KEY AUTOINCREMENT,locationQuestId INTEGER, locationLatitude TEXT , locationLongitude TEXT , locationValue INTEGER,FOREIGN KEY (locationQuestId) REFERENCES quest(questId)  )');
    console.log("table location created")

    // create clue
    sqldb.run('CREATE TABLE IF NOT EXISTS clue(clueId INTEGER PRIMARY KEY AUTOINCREMENT, clueLocationId INTEGER , clueSortOrder INTEGER, clueString TEXT, FOREIGN KEY (clueLocationId) REFERENCES location(locationId))');
    console.log("table clue created")

    // create competitionTeamMapping 
    sqldb.run('CREATE TABLE IF NOT EXISTS competitionTeamMapping (competitionId INTEGER PRIMARY KEY, competitionTeamId INTEGER, datetimeInvited TEXT , datetimeAccepted TEXT, datetimeRejected TEXT , datetimeDeleted TEXT,FOREIGN KEY(competitionTeamId) REFERENCES team (teamId))');
    console.log("table competitionTeamMapping created")

    // create player
    sqldb.run('CREATE TABLE IF NOT EXISTS player (playerId INTEGER PRIMARY KEY AUTOINCREMENT, playerTeamId INTEGER REFERENCES team(teamId) NOT NULL, playerUserId INTEGER REFERENCES user(userId), playerName text , datetimeInvited TEXT, datetimeAccepted TEXT, datetimeRejected TEXT, datetimeDeleted  TEXT)');
    console.log("table player created")

    // create playerScore
    sqldb.run('CREATE TABLE IF NOT EXISTS playerScore(playerScoreId INTEGER , playerOfPlayerId INTEGER, playerOfLocationId INTEGER,FOREIGN KEY(playerOfPlayerId) REFERENCES player(playerId), FOREIGN KEY(playerOfLocationId)REFERENCES location(locationId))');
    console.log("table playerScore created")


    // seed relational data into user table
    let sql1 = 'INSERT INTO user(email, password) VALUES (?,?)'
    sqldb.run(sql1, ['dcase@nwmissouri.edu', md5('dcase1')])
    sqldb.run(sql1, ['S538336@nwmissouri.edu', md5('vikas1')])
    sqldb.run(sql1, ['S538358@nwmissouri.edu', md5('prasad')])
    sqldb.run(sql1, ['S538365@nwmissouri.edu', md5('deekshith')])
    sqldb.run(sql1, ['S538293@nwmissouri.edu', md5('puneeth')])
    sqldb.run(sql1, ['S538361@nwmissouri.edu', md5('rajeshwari')])
    sqldb.run(sql1, ['S538098@nwmissouri.edu', md5('raju123')])
    sqldb.run(sql1, ['S538308@nwmissouri.edu', md5('rohith')])
    sqldb.run(sql1, ['S536845@nwmissouri.edu', md5('prasad')])
    sqldb.run(sql1, ['S538299@nwmissouri.edu', md5('harika')])
    console.log("Data inserted into user table.")

    // seed relational data into team table
    let sql2 = 'INSERT INTO team (teamName, creatorUserId) VALUES(?,?)'
    sqldb.run(sql2, ['Indians',1])
    sqldb.run(sql2, ['Americans',2])
    console.log("Data inserted into team table.")

    // seed relational data into quest table
    let sql4 = 'INSERT INTO quest (questName, questCreatorUserId) VALUES(?,?)'
    sqldb.run(sql4, ['maskOn', 1])
    sqldb.run(sql4, ['findMe', 2])
    console.log("Data inserted into quest table.")

    // seed relational data into competition table
    let sql3 = 'INSERT INTO competition(competitionName, CompetitionQuestId) VALUES(?,?)'
    sqldb.run(sql3, ['Baahubali', 1])
    sqldb.run(sql3, ['Avengers', 2])
    console.log("Data inserted into competition table.")

    // seed relational data into location table


    // seed relational data into clue table

    // seed relational data into player table

    // seed relational data into competitionTeamMapping table

    // seed relational data into playerScore table

});

// // close the database connection
// sqldb.close();
// console.log('Close the database');


module.exports = sqldb



