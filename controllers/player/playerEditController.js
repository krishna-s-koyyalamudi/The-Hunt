/**
 * Author Nooka Raju Boddu
 */
const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

    

app.post("/:playerName", (req, res, next) => {
    var model = require('../../models/player');
    var errors = []
    var params = [data.playerName]
var query ='UPDATE player SET (REPLACE playerName VALUES (?, ?, ?)'

    if (!req.body.playerName) {
        errors.push("No playerName received.");
    }

    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    else {
      var data = db.run(sql, params, function(err, result) {
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