/*
*@author Chandrakanth Polisetty
*/
const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

// var sql = 'DELETE FROM quest WHERE id = ?'
//     var params = [quest.Id]


app.delete("/quest/delete", jsonParser, (req, res, next) => {
  console.log(req, " ----request is here")
  let questId = req.body;

  let error = null;
  sqldb.get('DELETE FROM quest WHERE id = ? ', [questId], (err, response) => {
    if (err) {
      console.error('Unable to delete quest', err);
      error = 'Unable to delete quest';
    } else if (!err && !response) {
      console.log("Quest not fount")
    } else {
      //   res.render('./partials/home');
      console.log("Quest Deleted successfully")
    }
    console.log(err, res);
  })
})

async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const success = await employees.delete(id);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = app;