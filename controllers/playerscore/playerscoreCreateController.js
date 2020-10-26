/**
*
*
* @author Rajeshwari Rudravaram
*
*/

const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

// app.post("/playerScore/create", jsonParser, (req, res, next) => {
//     console.log(req, " ----request is here")
//     let playerScoreId = req.body;
    
//  let error = null;
//     sqldb.get('CREATE FROM playerScore WHERE playerScoreId = ? ', [playerScoreId], (err, response) => {
//         if (err) {
//             console.error('Unable to create playerScore', err);
//             error = 'Unable to create player score';
//         } else if (!err && !response) {
//             console.log("Player Score not found")
//         } else {
//             console.log("Player Score Created successfully")
//         }
//         console.log(err, res);
//     })
//   });
//  module.exports = app;
