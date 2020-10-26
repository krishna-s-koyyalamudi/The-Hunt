/**
 * This will handle the request for competition/delete
 * 
 * get - returns the page for deleting a competition
 * 
 * post - it deletes the team in the data store 
 * 
/*
*  @author Sumanth Reddy and Rajashekar
*/
 

const express=require('express')
const app=express.Router()
const Model=require('../../models/competition.js')


app.get("/delete", (req, res, next) => {
    LOG.info(`Handling GET /delete/:id ${req}`)
    var sql = "delete from competition where competitionName = ?"
    var params = []
    db.all(sql,params, (err, rows) => {
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