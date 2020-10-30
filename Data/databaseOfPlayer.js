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
        

        // Creating player table
        db.run(`CREATE TABLE player (playerId INTEGER PRIMARY KEY AUTOINCREMENT, 
            teamId INTEGER  , userId INTEGER , playerName text ,
             datetimeInvited TEXT, datetimeAccepted TEXT, datetimeRejected TEXT,
              datetimeDeleted  TEXT, FOREIGN KEY (teamId) REFERENCES team(teamId),
               FORIEGN KEY (userId) REFERENCES user(userId))`,

               (err) => {
                if (err) {
                    // if the player table is already created
                }else{

                     // team player is created and creating few rows by inserting few values into it
                var insert = 'INSERT INTO team (playerId, teamId, playerName) VALUES (?,?,?,)'
                db.run(insert, ["100","123","Rebel"])
                db.run(insert, ["101","321","King"])


        
      }
        });  
    }
});