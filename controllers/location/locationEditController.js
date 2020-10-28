/** 
* @author Rajeshwari Rudravaram
*
*
*/

// const express = require('express');
// const app = express.Router();
 
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// var jsonParser = bodyParser.json()
 
//  app.patch("/api/location/:id", (req, res, next) => {
//     var data = {
//       locationId: req.body.locationId,
//       questId: req.body.questId,
//       locationLatitude: req.body.locationLatitude,
//       locationLongitude: req.body.locationLongitude,
//       locationValue: req.body.locationValue
//     }
//     db.run(
//       `UPDATE location set 
//            locationLatitude = COALESCE(?,locationLatitude)
//            locationLongitude = COALESCE(?,locationLongitude) 
//            locationValue = COALESCE(?,locationValue) 
//            WHERE locationId = ?`,
//       [data.locationId, data.questId, data.locationLatitude, data.locationLongitude, req.params.locationId, req.param.questId],
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
//   });