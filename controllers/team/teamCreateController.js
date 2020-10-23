/**
 * This will handle the request for team/create
 * 
 * get - returns the page for creating a new team
 * 
 * post - it cretes the team in the data store 
 * 
 * @author Bhaskar Reddy Minupuri <S538310@nwmissouri.edu>
 * 
 */
const express = require('express');
const app = express.Router();

const Model = require('../models/team.js');

app.post("/:teamCreate", (req, res, next) => {
    var model = require('../../models/team');
    var errors = []
    var params = [data.teamName]
    var query = 'INSERT INTO team(teamname) VALUES(?)'
    if (!req.body.teamName) {
        errors.push("No teamName specified.");
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