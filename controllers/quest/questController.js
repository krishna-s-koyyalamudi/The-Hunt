/** 
*  Quest controller
*  Handles requests related to QuestCreation (see routes)
*
* @author Pruthvi Naskanti<s538094@nwmissouri.edu> and Rohith Reddy Avisakula<s538295@nwmissouri.edu>
*
*/
const express = require('express');
const app = express.Router();
// const LOG = require('../utils/logger.js');
const Model = require('../models/quest.js');
// const notfoundstring = 'quest not found'


// GET create
app.get('/', (req, res) => {
    console.log("==============================");
    // LOG.info(`Handling GET /create ${req}`)
    Model.find({}, (err, data) => {
      if (err) { return res.end('error on create') }
      res.locals.quest = data
      res.locals.quest = new Model()
      res.render('questCreate/create')
    })
  });

app.post("/api/quest/:questName", (req, res, next) => {
    var model = require('../../models/quest');
    var errors = []
    if (!req.body.questName) {
        errors.push("No questName specified");
    }

    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }

    var data = {
        questName: req.body.questName,
    }

    var sql = 'INSERT INTO quest (questName) VALUES (?)'
    var params = [data.questName]
    if (!model.questName) {
        errors.push("Please enter unique questName");
        return;
    }


    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }

        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        })

    });
})
exports.create = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};

// Function defined which checks latitiude and longitude co-ordinates of starting point provided as input and saves them in the appropriate table in database

app.post("/api/quest/location", (req, res, next) => {
    var errors = []
    if (!req.body.latitude) {
        errors.push("No Latitude specified");
    }
    if (!req.body.longitude) {
        errors.push("No Longitude specified");
    }
    var location = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        clue: req.body.clue,
    }
    var sql = 'INSERT INTO quest (Quest starting location Latitude, Quest starting location Longitude, clue1) VALUES (?,?)'
    var params = [data.latitude, data.longitude, data.clue]
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ "Error": err.message })
            return;
        }
        res.json({
            "message": "Success",
            "data": data
        })
    });
})

// Function defined which checks latitiude and longitude co-ordinates of quest provided as input and saves them in the appropriate table in database

app.post("/api/quest/quest_location", (req, res, next) => {
    var errors = []
    if (!req.body.latitude) {
        errors.push("No Latitude specified");
    }
    if (!req.body.longitude) {
        errors.push("No Longitude specified");
    }
    var location = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    }
    var sql = 'INSERT INTO quest (Quest location Latitude, Quest location Longitude) VALUES (?,?)'
    var params = [data.latitude, data.longitude]
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ "Error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data
        })
    });
})

module.exports = app;

module.exports = app;
