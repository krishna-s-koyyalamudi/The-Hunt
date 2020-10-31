/*
*  @author Sumanth Reddy and Rajashekar
*/

const express=require('express')
const app=express.Router()
const Model=require('../../models/competition.js')

app.get("/competition:list", (req, res, next) => {
    var sql = "select * from competition"
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

app.post("/competition:create", (req, res, next) => {
    var errors = []
    if (!req.body.competitionname) {
      errors.push("Competititon name not specified");
    }   
    if (errors.length) {
      res.status(400).json({ "error": errors.join(",") });
      return;
    }
    res.json({
      "message": "success"
    })
});
module.exports = app;
  

