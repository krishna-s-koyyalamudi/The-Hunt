/**
 * Author Rohith reddy avisakula
 */
const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

// var sql = 'DELETE FROM quest WHERE id = ?'
//     var params = [quest.Id]
    

app.post("/:userId", (req, res, next) => {
    var model = require('../../models/player');
    var errors = []
    var params = [data.userId]
    var query = 'INSERT INTO player(userId) VALUES(?,?,?)'
    if (!req.body.user_id) {
        errors.push("No user id received.");
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