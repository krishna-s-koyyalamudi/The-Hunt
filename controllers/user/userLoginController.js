const express=require('express')
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
const md5 = require('md5')
const sqldb = require('../../database')

    //  exports.user_login = function(req, res) {

//   function user_login(req, res){
    
app.post("/Login", jsonParser, (req, res, next) => {
    console.log(req, " ----request is here")
  let { email, password } = req.body;

  let error = null;
   sqldb.get('select * from user where email = ? and password = ?', [email, md5(password)], (err, response) => {
      if (err) {
          console.error('Error trying to login', err);
          error = 'Error trying to login to application';
          res.render('login', { error: error });
      } else if (!err && !response) {
          console.log("Username or password invalid")
      } else {
          res.render('./partials/home');
      }
      console.log(err, res);
  })
})

module.exports = app;