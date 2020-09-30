var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE IF NOT EXISTS user (
            email VARCHAR(30) ,
            password VARCHAR(8) ,
            userId INT(10) PRIMARY KEY NOT NULL UNIQUE AUTO INCREMENT,
            userName VARCHAR(9) ,
            dateCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            dateLastAccessed DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
             )`,

             (err) => {
              if (err) {
                  // Table already created
              }else{
                  // Table just created, creating some rows
                  var insert = 'INSERT INTO user (userId, email, password,userName,dateCreated,dateLastAccessed) VALUES (?,?,?.?,?,?)'
                  db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                  db.run(insert, ["user","user@example.com",md5("user123456")])
              }
          });  
      }
  });