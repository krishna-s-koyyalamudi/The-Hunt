/**
 * This will handle the request for location/create
 * 
 * get - returns the page for creating a new location
 * 
 * post - it creates the location in the data store 
 * 
 *@author Bhaskar reddy 
 * 
 */ 
const express=require('express')
const app=express.Router()
const Model=require('../../models/location.js')

app.post("/locationCreate", (req, res, next) => {
    var errors = []
    if (!req.body.locationname) {
      errors.push("location name not specified");
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