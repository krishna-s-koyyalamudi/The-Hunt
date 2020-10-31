const express=require('express')
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
const md5 = require('md5')
const db = require('../../database')

    //  exports.user_login = function(req, res) {

//   function user_login(req, res){
    
app.post("/try", jsonParser, (req, res, next) => {
    console.log("this hits over login--------")
    // console.log(req.body, " ----request is here")
  let { email, password } = req.body;
console.log(req.body,"request body is here")
  let error = null;
  

  db.get('select * from user where email = ? and password = ?', [email, md5(password)], (err, response) => {
    if (err) {
                console.error('Error trying to login', err);
                error = 'Error trying to login to application';
                res.render('login', { error: error });
                 return response.json({
                   "error": error
                 })
            } 
            else if (!err && !res) {
                console.log("Username or password invalid")
              //   return res(1)
              return response.json({
                "error": "Username or password invalid"
              })
            }
             else {
                 return res.json({"success": response})
            }
  })
})

module.exports = app;