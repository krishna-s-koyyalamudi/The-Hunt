var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"
// opening our database
let db = new sqlite3.Database('C:/sqlite/hunt.db', sqlite3.OPEN_READWRITE,(err) => {
    if (err) {
      // If database is not found then it can not open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the HUNT database of SQLite.')
    // creating a team table   
        db.run(`CREATE TABLE team (
            teamId INTEGER PRIMARY KEY AUTOINCREMENT,
            creatorUserId INTEGER, 
            teamName text UNIQUE, 
            dateTimeCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            dateTimeLastEdited DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
            )`,
        (err) => {
            if (err) {
                // if the team table is already created
            }else{
                // team table is created and creating few rows by inserting few values into it
                var insert = 'INSERT INTO team (teamId, creatorUserId, teamName) VALUES (?,?,?,)'
                db.run(insert, ["123","100","Sunrises"])
                db.run(insert, ["321","101","Knight Riders"])
            }
        });  
    }
});


module.exports = db
