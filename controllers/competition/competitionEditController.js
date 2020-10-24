/**
 * This will handle the request for competition/create
 * 
 * get - returns the page for creating a new competition
 * 
 * post - it creates the team in the data store 
 * 
 * 
 */ 
const express=require('express')
const app=express.Router()
const Model=require('../../models/competition.js')
app.put()
  app.patch("/api/competiton/:id", (req, res, next) => {
     var data = {
       competitonName: req.body.competitonName,
       competitonid: req.body.competitonid
     
     }
     db.run(
       `UPDATE competiton set 
            competitonName = coalesce(?,competitonName), 
             WHERE questId = ?`,
       [data.competitonName, data.competitonId, req.params.competitonId],
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