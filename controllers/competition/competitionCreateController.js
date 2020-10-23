/**
 * This will handle the request for competition/create
 * 
 * get - returns the page for creating a new competition
 * 
 * post - it creates the team in the data store 
 * 
 *@author Sumanth Reddy and Rajashekar
 * 
 */ 
const express=require('express')
const app=express.Router()
const Model=require('../../models/competition.js')

app.post("/api/competition/", (req, res, next) => {
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