/**
 * This will handle the request for clue/create
 * 
 * @author gundupooja<S538295@nwmissouri.edu>
 * 
 */
const express = require('express');
const app = express.Router();

const Model = require('../models/clue.js');

app.post("/:clueCreate", (req, res, next) => {
    var model = require('../../models/clue');
    var errors = []
    var params = [data.clueString]
    var query = 'Insert into clue(clueString) values(?)'

    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    else {
        sqldb.run(sql, params, function(err, result) {
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