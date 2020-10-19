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
    sqldb.run('CREATE TABLE IF NOT EXISTS user (email text,password text,userId INTEGER PRIMARY KEY AUTOINCREMENT)');
    console.log("Table created.")
    // Table just created, creating some rows
    let sql = 'INSERT INTO user (email, password) VALUES (?,?)';
    sqldb.run(sql, ["ravuluri@gmail.com", md5("ravi1432")]);
    sqldb.run(sql, ["anusha12@gmail.com", md5("anus1233")]);
    sqldb.run(sql, ["sandy@gmail.com", md5("sandy123")]);
    sqldb.run(sql, ["devi@gmail.com", md5("devi4590")]);
    sqldb.run(sql, ["tarun@gmail.com", md5("tarun231")]);
    sqldb.run(sql, ["aswin@gmail.com", md5("aswin456")]);
    sqldb.run(sql, ["raghu@gmail.com", md5("raghu2345")]);
    sqldb.run(sql, ["eswar@gmail.com", md5("eswar546")]);
    sqldb.run(sql, ["dcase@nwmissouri.edu", md5("dcase")]);
    console.log("data inserted.")

    sqldb.run('CREATE TABLE IF NOT EXISTS team (teamId INTEGER PRIMARY KEY AUTOINCREMENT, teamName text, creatorUserId INTEGER, FOREIGN KEY (creatorUserId) REFERENCES user(userId))');
    console.log("Table 2 created.")
    let sql1 = 'INSERT INTO team (teamName) VALUES (?)';
    sqldb.run(sql1, ["sunRisers"]);
    sqldb.run(sql1, ["royalChallengers"]);
    console.log("data 2 inserted")
});

// // close the database connection
// sqldb.close();
// console.log('Close the database');


module.exports = sqldb



