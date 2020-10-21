/**
 * @author Sai Rohith 
 * @author RaviChander
 */
const express=require('express')
const Model=require('../../models/team')
const app = express();


app.get("/team", (req, res, next) => {
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
    if (!req.body.teamnName) {
      errors.push("Team name not specified");
    }   
    var data = {
      teamName: req.body.teamName
    }
    var sql = 'INSERT INTO team (Name) VALUES (?)'
    var params = [data.teamName]
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ "error": err.message })
        return;
      }
      res.json({
        "message": "success",
        "data": data,
        "teamName": this.lastteamName
      })
    });
  })

 app.patch("/api/team/:id", (req, res, next) => {
    var data = {
      teamName: req.body.teamName,
      teamid: req.body.teamid
    }
    db.run(
      `UPDATE team set 
           teamName = coalesce(?,teamName), 
           teamId = COALESCE(?,teamid), 
           WHERE teamId = ?`,
      [data.teamName, data.teamId, req.params.teamId],
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
  
  app.delete("/api/team/:id", (req, res, next) => {
    db.run(
      'DELETE FROM team WHERE id = ?',
      req.params.id,
      function (err, result) {
        if (err) {
          res.status(400).json({ "error": res.message })
          return;
        }
        res.json({ "message": "deleted", rows: this.changes })
      });
  })

  
  
module.exports = app;