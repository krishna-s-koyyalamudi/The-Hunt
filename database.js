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
        
        db.run ('CREATE TABLE IF NOT EXISTS team (teamId INTEGER PRIMARY KEY AUTOINCREMENT  , creatorUserId INTEGER, FOREIGN KEY(creatorUserId) REFERENCES user(userId))');
        
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
            
        });

        module.export = db
        

          // close the database connection
    // db.close();
    // console.log('Close the database');
    
