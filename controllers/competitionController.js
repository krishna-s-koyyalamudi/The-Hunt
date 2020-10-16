/**
 * @author Sumanth Reddy and Rajashekar
 */

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
// app.post("/api/competition/", (req, res, next) => {
//     var errors = []
//     if (!req.body.competitionname) {
//       errors.push("Competititon name not specified");
//     }   
//     if (errors.length) {
//       res.status(400).json({ "error": errors.join(",") });
//       return;
//     }
//   });
app.post('/api/competition/save', (req, res, next) => {
      const errors = []
      if (!req.body.competitionName) {
        errors.push('No competition name specified');
      }
      if (!req.body.creatorUserId) {
        errors.push('No user ID specified');
      }
      if (!req.body.questId) {
        errors.push('No quest ID specified');
      }
      if (!req.body.dateCreated) {
        errors.push('No creation date specified');
      }
      if (!req.body.startDatetime) {
        errors.push('No start time specified');
      }
      if (!req.body.endDatetime) {
        errors.push('No end time specified');
      }
      if (errors.length) {
        res.status(400).json({ 'error': errors.join(',') });
        return;
      }
      const data = {
        competitionName: req.body.competitionName,
        creatorUserId: req.body.creatorUserId,
        dateCreated: req.body.dateCreated,
        startDatetime: req.body.startDatetime,
        endDatetime: req.body.endDatetime,
        questId: req.body.questId
      }
      const sql = 'INSERT INTO competition (competitionName, creatorUserId,dateCreated,startDatetime,endDatetime,questId ) VALUES (?,?,?,?,?,?)'
      const params = [data.competitionName, data.creatorUserId, data.dateCreated, data.startDatetime,data.endDatetime,data.questId]
      db.run(sql, params, function (err, result) {
        if (err) {
          res.status(400).json({ 'error': err.message })
          return;
        }
        res.json({
          'message': 'success',
          'data': data
        })
      });
    })
  
  
  
