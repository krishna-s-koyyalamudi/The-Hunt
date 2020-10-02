const sqlite3 = require('sqlite3').verbose();
var md5 = require('md5')

// open database in memory
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
    return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.'); }); 
    // close the database connection
    db.close((err) => {  
    if (err) { 
    return console.error(err.message); }
    console.log('Close the database connection.');
    });
        db.run(`CREATE TABLE IF NOT EXISTS user (
            email VARCHAR(30) ,
            password VARCHAR(8) ,
            userId INT(10) PRIMARY KEY NOT NULL UNIQUE AUTO INCREMENT,
            userName VARCHAR(15) ,
            dateCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            dateLastAccessed DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
             )`,

             (err) => {
              if (err) {
                  // Table already created
              }else{
                  // Table just created, creating some rows
                  var insert = 'INSERT INTO user (email, password,userName) VALUES (?,?,?)'
                  db.run(insert, ["ravuluri@gmail.com",md5("ravi1432"),"ravi"])
                  db.run(insert, ["anusha12@gmail.com",md5("anus1233"),"anuravi"])
                  db.run(insert, ["sandy@gmail.com",md5("sandy123"),"sandy12"])
                  db.run(insert, ["devi@gmail.com",md5("devi4590"),"devi45"])
                  db.run(insert, ["tarun@gmail.com",md5("tarun231"),"tarunfarhen"])
                  db.run(insert, ["aswin@gmail.com",md5("aswin456"),"aswinrebeca"])
                  db.run(insert, ["raghu@gmail.com",md5("raghu2345"),"raghunikki"])
                  db.run(insert, ["eswar@gmail.com",md5("eswar546"),"eswarfox"])
              }
          });  
      }
  });