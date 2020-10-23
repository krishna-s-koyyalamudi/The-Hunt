const express=require('express')
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
const md5 = require('md5')
const sqldb = require('../../database')
  
  
  app.post("/Register", (req, res, next) => {
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
    //  userName : req.body.userName,
      email: req.body.email,
      password: md5(req.body.password)
    }
    var sql = 'INSERT INTO user (email, password) VALUES (?,?)'
    var params = [data.email, data.password]
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ "error": err.message })
        return;
      }
      res.json({
        "message": "success",
        "data": data,
        // "userName": this.lastuserName
      })
    });
  })
  
  module.exports = app;