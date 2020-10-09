const sqlite3 = require('sqlite3').verbose();
var md5 = require('md5')

// create database in local disk
let db = new sqlite3.Database('./hunt.db',(err) => {
    if (err) {
    return console.error(err.message);
    }
    else{
    console.log('Connected to the hunt database.');  
        db.run('CREATE TABLE IF NOT EXISTS user (email text,password text,userId INTEGER PRIMARY KEY AUTOINCREMENT,userName text)');
        db.run ('CREATE TABLE IF NOT EXISTS team (teamId INTEGER PRIMARY KEY AUTOINCREMENT  , creatorUserId INTEGER FOREIGN KEY(creatorUserId) REFERENCES user(userId),teamName text UNIQUE )');
        db.run('CREATE TBALE IF NOT EXISTS quest(questId INTEGER PRIMARY KEY AUTOINCREMENT, creatorUserId INTEGER FOREIGN KEY(creatorUserId) REFERENCES user(userId), questName text,questStartLocationLogitude text, questStartLocationLongitude text)');
        db.run ('CREATE TABLE IF NOT EXISTS competition(competitionId INTEGER PRIMARY KEY AUTOINCREMENT, competitionName UNIQUE text, creatorUserId INTEGER FOREIGN KEY(creatorUserId) REFERENCES user(userId), questId FOREIGN KEY(questId) REFERENCES quest(questId), datecreated DEFAULT CURRENT_TIMESTAMP, startDate text,endDate text)');
    }
            // Table just created, creating some rows
            let sql = 'INSERT INTO user (email, password,userName) VALUES (?,?,?)';
            db.run(sql, ["ravuluri@gmail.com", md5("ravi1432"), "ravi"]);
            db.run(sql, ["anusha12@gmail.com", md5("anus1233"), "anuravi"]);
            db.run(sql, ["sandy@gmail.com", md5("sandy123"), "sandy12"]);
            db.run(sql, ["devi@gmail.com", md5("devi4590"), "devi45"]);
            db.run(sql, ["tarun@gmail.com", md5("tarun231"), "tarunfarhen"]);
            db.run(sql, ["aswin@gmail.com", md5("aswin456"), "aswinrebeca"]);
            db.run(sql, ["raghu@gmail.com", md5("raghu2345"), "raghunikki"]);
            db.run(sql, ["eswar@gmail.com", md5("eswar546"), "eswarfox"]);

            let sql1 = 'INSERT INTO team(teamName) VLAUES (?)';
            db.run(sql1,["sunRisers"]);
            db.run(sqli1,["mumbaiIndians"]);

            let sql2 = 'INSERT INTO quest(questName, questStartLoacationLatitude, questStartLOcationLongitude) VALUES (?,?,?)';
            db.run(sql2,["maskOn","44.968096","-94.420307"]);
            db.run(sql2,["findMe","55.968096","-64.420307"]);

            let sql3 = 'INSERT INTO competiton (competitionName,startDate, endDate) VALUES (?,?,?)';
            db.run(sql3,["avengers","10/11/2020","10/18/2020"]);
            db.run(sql3,["bahubali","10/11/2020","10/18/2020"]);

            
        });

        module.exports = db
        

          // close the database connection
    // db.close();
    // console.log('Close the database');
    
