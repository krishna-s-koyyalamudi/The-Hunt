/**
 *  @author Venkatayashwanth Damera
 */

const express = require('express');
const app = express.Router();
 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()
 
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

  async function edit(req, res, next)
{
      try 
      {
        const id = parseInt(req.params.id, 10);
     
        const success = await employees.edit(id);
     
        if (success)
        {
          res.status(200).end();
        } 
          else
          {
          res.status(404).end();
        }
      } 
    catch (err) {
        next(err);
      }
    }
  
