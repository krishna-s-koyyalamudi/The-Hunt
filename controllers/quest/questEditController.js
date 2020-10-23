/*
* @author Krishna Sumanth Koyyalamudi
*/

// const express = require('express');
// const app = express.Router();
 
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// var jsonParser = bodyParser.json()
 
//  app.patch("/api/quest/:id", (req, res, next) => {
//     var data = {
//       questName: req.body.questName,
//       questid: req.body.questid,
//       latitude: req.body.latitude,
//       longitude: req.body.longitude
//     }
//     db.run(
//       `UPDATE quest set 
//            questName = coalesce(?,questName), 
//            latitude = COALESCE(?,latitude)
//            longitude = COALESCE(?,longitude) 
//            WHERE questId = ?`,
//       [data.questName, data.questId, data.latitude, data.longitude, req.params.questId],
//       (err, result) => {
//         if (err) {
//           res.status(400).json({ "error": res.message })
//           return;
//         }
//         res.json({
//           message: "success",
//           data: data
//         })
//       });
//   })
