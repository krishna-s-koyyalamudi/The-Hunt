const express=require('express')
const api=express.Router()
const Model=require('../models/competition.js')


app.get("/api/competition", (req, res, next) => {
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
app.post("/api/competition/", (req, res, next) => {
    var errors = []
    if (!req.body.competitionname) {
      errors.push("Competititon name not specified");
    }   
    if (errors.length) {
      res.status(400).json({ "error": errors.join(",") });
      return;
    }
  
  
  
