const express = require('express')
const engines = require('consolidate')
const path = require('path')
const ejsLint = require('ejs-lint');
const expressLayouts = require('express-ejs-layouts')
const bodyparser = require("body-parser");
const app = express();
var db = require("./database.js")
const bodyParser = require("body-parser");


//set the root view folder
app.set('views', path.join(__dirname, 'views'))

// specify desired view engine (EJS)
app.set('view engine', 'ejs')
// app.set('view engine', 'pug');
app.engine('ejs', engines.ejs)

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressLayouts)
app.use(express.static("public"));

port = process.env.PORT || 80

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Login.html')
});

app.get('/dashboard', (req, res)=> {
  res.render('index');
})

app.get('/dashboard/home', (req, res)=> {
  res.render('home');
})

app.get('/competition', (req, res) => {
  res.render(__dirname + '/views/createCompetition.ejs')
})


app.get('/dashboard/leaderboard', (req, res)=> {
  res.render('leaderboard')
})

app.get('/dashboard/createCompetition', (req, res)=> {
  res.render('createCompetition')
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


app.listen(port, () => {
  console.log('Example app listening on port 80!')
});
//app.post("/addcustomer", jsonparser, customer.addcustomer);
