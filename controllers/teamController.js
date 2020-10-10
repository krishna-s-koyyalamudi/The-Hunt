const express=require('express')
const api=express.Router()
const Model=require('../models/team.js')


app.get("/api/team", (req, res, next) => {
    var sql = "select * from team"
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
app.post("/api/team/", (req, res, next) => {
    var errors = []
    if (!req.body.teamnname) {
      errors.push("Team name not specified");
    }   
    if (errors.length) {
      res.status(400).json({ "error": errors.join(",") });
      return;
    }
  
