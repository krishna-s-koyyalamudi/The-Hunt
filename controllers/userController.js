/**
 *  @author Vikas Baswapuram
 * @author Rohith Chittimalla and VenkataYashwant danera
 */


const express=require('express')
const app = express();
const api=express.Router()
const Model=require('../models/user.js')
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
      userName: req.body.userName,
      email: req.body.email,
      password: md5(req.body.password)
    }
    var sql = 'INSERT INTO user (userName, email, password) VALUES (?,?,?)'
    var params = [data.userName, data.email, data.password]
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ "error": err.message })
        return;
      }
      res.json({
        "message": "success",
        "data": data,
        "userName": this.lastuserName
      })
    });
  })
  
  
  
  app.patch("/api/user/:id", (req, res, next) => {
    var data = {
      UserName: req.body.userName,
      email: req.body.email,
      password: req.body.password ? md5(req.body.password) : undefined
    }
    db.run(
      `UPDATE user set 
           userName = coalesce(?,userName), 
           email = COALESCE(?,email), 
           password = coalesce(?,password) 
           WHERE userId = ?`,
      [data.userName, data.email, data.password, req.params.userId],
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
  
  

  
