/**
 *
 * @author Rajeshwari Rudravaram
 *
 */
//    As views/playeScore/delete.ejs yet to be added
//      const express = require('express');
//      const app = express.Router();

//      const bodyParser = require('body-parser');
//      app.use(bodyParser.urlencoded({ extended: true }));
//      var jsonParser = bodyParser.json()

//      app.delete("/playerScore/delete", jsonParser, (req, res, next) => {
//      console.log(req, " ----request is here")
//      let playerScoreId = req.body;
    
//      let error = null;
//      sqldb.get('DELETE FROM playerScore WHERE playerScoreId = ? ', [playerScoreId], (err, response) => {
//         if (err) {
//             console.error('Unable to delete playerScore', err);
//             error = 'Unable to delete player score';
//         } else if (!err && !response) {
//             console.log("Player Score is not found")
//         } else {
//             console.log("Player Score Deleted successfully")
//         }
//         console.log(err, res);

//     })
//    });
//  module.exports = app;
