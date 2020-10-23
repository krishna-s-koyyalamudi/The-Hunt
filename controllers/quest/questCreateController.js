/**
 * This will handle the request for quest/create
 * 
 * get - returns the page for creating a new quest
 * 
 * post - it cretes the team in the data store 
 * 
 * @author Rohith Chittimalla <S538308@nwmissouri.edu>
 * 
 */

const express = require('express');
const app = express.Router();

const Model = require('../models/quest.js');

// GET create
// app.get('/', (req, res) => {
//     console.log("==============================");
//     // LOG.info(`Handling GET /create ${req}`)
//     Model.find({}, (err, data) => {
//       if (err) { return res.end('error on create') }
//       res.locals.quest = data
//       res.locals.quest = new Model()
//       res.render('questCreate/create')
//     })
//   });

app.post("/:questCreate", (req, res, next) => {
    var model = require('../../models/quest');
    var errors = []
    var params = [data.questName,data.longitude,data.latitude]
    var query = 'INSERT INTO quest(questname, longitude, latitude) VALUES(?,?,?)'
    if (!req.body.questName || !req.body.latitude || !req.body.longitude) {
        errors.push("No questName or latitude or longitude specified.");
    }

    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    else {
        db.run(sql, params, function(err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.json({
                "message": "success",
                "data": data
            })
    })
}
});


module.exports = app;