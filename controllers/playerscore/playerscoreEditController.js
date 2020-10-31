/**
 *
 * @author Vishal Reddy Vennavaram
 *
 */

const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

// app.edit("/playerScore/edit", jsonParser, (req, res, next) => {
//     console.log(req, " ----request is here")
//     let playerScoreId = req.body;
    
//  let error = null;
//     sqldb.get('EDIT FROM playerScore WHERE playerScoreId = ? ', [playerScoreId], (err, response) => {
//         if (err) {
//             console.error('Unable to edit playerScore', err);
//             error = 'Unable to edit player score';
//         } else if (!err && !response) {
//             console.log("Player Score not found")
//         } else {
//             //   res.render('./partials/home');
//             console.log("Player Score Edited successfully")
//         }
//         console.log(err, res);

//     })
// })
//  module.exports = app;
