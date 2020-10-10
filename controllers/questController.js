app.post("/api/quest/:questname", (req, res, next) => {
    var model = require('../models/quest');
    var errors = []
    if (!req.body.questname) {
        errors.push("No questname specified");
    }

    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }

    var data = {
        questname: req.body.questname,
    }

    var sql = 'INSERT INTO quest (questname) VALUES (?)'
    var params = [data.questname]
    if (!model.questname) {
        errors.push("Please enter unique questname");
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

app.post("/api/quest/location", (req, res, next) => {
    var errors = []
    if (!req.body.latitude) {
        errors.push("No latitude specified");
    }
    if (!req.body.longitude) {
        errors.push("No longitude specified");
    }
    var location = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    }
    var sql = 'INSERT INTO quest (Quest starting location Latitude, Quest starting location Longitude) VALUES (?,?)'
    var params = [data.latitude, data.longitude]
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data
        })
    });
})


app.post("/api/quest/quest_location", (req, res, next) => {
            var errors = []
            if (!req.body.latitude) {
                errors.push("No latitude specified");
            }
            if (!req.body.longitude) {
                errors.push("No longitude specified");
            }
            var location = {
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            }
            var sql = 'INSERT INTO quest (Quest location Latitude, Quest location Longitude) VALUES (?,?)'