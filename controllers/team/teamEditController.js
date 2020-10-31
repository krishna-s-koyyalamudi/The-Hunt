/**
 *  @author Venkatayashwanth Damera
 */

const express = require('express');
const app = express.Router();
 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
 
 app.patch("/edit", (req, res, next) => {
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
        if (err) 
        {
          res.status(400).json({ "error": res.message })
          return;
        }
        res.json({
          message: "success",
          data: data
        })
      });
  })

  
    module.exports = app;
  
