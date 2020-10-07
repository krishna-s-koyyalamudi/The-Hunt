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


app.get('/loginpage', (req, res) => {
    res.render(__dirname + '/views/loginpage.ejs')
})

app.get('/registerpage', (req, res) => {
    res.render(__dirname + '/views/signuppage.ejs')
})

app.get('/dashboard/createCompetition', (req, res)=> {
  res.render('createCompetition')
})

app.get('/forgotcod', (req, res) => {
    res.render(__dirname + '/views/forgotcod.ejs')
})
app.get('/forgotemail', (req, res) => {
    res.render(__dirname + '/views/forgotemail.ejs')
})
app.get('/home', (req, res) => {
    res.render(__dirname + '/views/home.ejs')
})

// app.get('/competition', (req, res) => {
//     res.render(__dirname + '/views/createCompetition.ejs')
// })


app.get("/dashboard/createScreen",(req,res)=>{
    res.render("createScreen")
})

app.get("/dashboard/quest",(req,res)=>{
    res.render("questCreate.ejs")
})

app.get('/dashboard/leaderboard', (req, res) => {
    console.log("--------leaderboard-------")
    res.render(__dirname + '/views/leaderboard.ejs')
})

app.get('/createquest', (req, res) => {
    res.render(__dirname + '/views/createQuest.ejs')
})

app.get('/profile', (req, res) => {
    res.render(__dirname + '/views/profile.ejs')
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/Signup/Signup.html");
});


app.get("/forgetPassword", (req, res) => {
    res.sendFile(__dirname + "/views/ForgetPassword/forgetpassword1.html")
});

app.get("/dashboard/createTeam",(req,res)=>{
    res.render("createTeam")
})

app.get("/layout", (req,res)=>{
    res.render("layout")
    
  }) 
  app.get("/profile", (req,res)=>{
    res.render("profile")
  }) 

  app.get("/footer", (req,res)=>{
    res.render("footer") 
  })


  app.get("/invitePlayers", (req,res)=>{
    res.render("invitePlayers")
  })
app.use(bodyparser.json({ type: "application/*+json" }));


app.listen(port, () => {
    console.log('Example app listening on port 80!')
});
//app.post("/addcustomer", jsonparser, customer.addcustomer);