const express = require('express')
const engines = require('consolidate')
const path = require('path')
const ejsLint = require('ejs-lint');
const bodyparser = require("body-parser");
const app = express();
var db = require("./database.js")

// set the root view folder
// app.set('views', path.join(__dirname, 'views'))

// specify desired view engine (EJS)
app.set('view engine', 'ejs')
// app.set('view engine', 'pug');
app.engine('ejs', engines.ejs)

app.use(express.static("public"));

port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Login.html')
});

app.get('/dashboard', (req, res)=> {
  res.render(__dirname + '/views/layout.ejs')
})

app.get('/home', (req, res)=> {
  res.render(__dirname + '/views/home.ejs')
})

app.get('/leaderboard', (req, res)=> {
  res.render(__dirname + '/views/leaderboard.ejs')
})

app.get('/createquest', (req, res)=> {
  res.render(__dirname + '/views/createQuest.ejs')
})

app.get('/profile', (req, res)=> {
  res.render(__dirname + '/views/profile.ejs')
})

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/Signup/Signup.html");
});

app.get("/forgetPassword", (req, res) => {
  res.sendFile(__dirname + "/views/ForgetPassword/forgetpassword1.html")
});


app.use(bodyparser.json({ type: "application/*+json" }));


app.get("/api/user", (req, res, next) => {
  var sql = "select * from user"
  var params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    })
  });
});



app.post("/api/user/", (req, res, next) => {
  var errors = []
  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({ "error": errors.join(",") });
    return;
  }
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password)
  }
  var sql = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
  var params = [data.name, data.email, data.password]
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ "error": err.message })
      return;
    }
    res.json({
      "message": "success",
      "data": data,
      "id": this.lastID
    })
  });
})



app.patch("/api/user/:id", (req, res, next) => {
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? md5(req.body.password) : undefined
  }
  db.run(
    `UPDATE user set 
         name = coalesce(?,name), 
         email = COALESCE(?,email), 
         password = coalesce(?,password) 
         WHERE id = ?`,
    [data.name, data.email, data.password, req.params.id],
    (err, result) => {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      res.json({
        message: "success",
        data: data
      })
    });
})


app.delete("/api/user/:id", (req, res, next) => {
  db.run(
    'DELETE FROM user WHERE id = ?',
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      res.json({ "message": "deleted", rows: this.changes })
    });
})





app.listen(port, () => {
  console.log('Example app listening on port 80!')
});
//app.post("/addcustomer", jsonparser, customer.addcustomer);
