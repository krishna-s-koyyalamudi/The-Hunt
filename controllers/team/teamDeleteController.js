/*
* @author Sai Rohith Gorla
*/
const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

// var sql = 'DELETE FROM team WHERE id = ?'
//     var params = [team.Id]
    

    app.delete("/team/delete", jsonParser, (req, res, next) => {
        console.log(req, " ----request is here")
      let  teamId  = req.body;
    
      let error = null;
       sqldb.get('DELETE FROM team WHERE id = ? ',[teamId], (err, response) => {
          if (err) {
              console.error('Unable to delete team', err);
              error = 'Unable to delete team';
          } else if (!err && !response) {
              console.log("team not found")
          } else {
            //   res.render('./partials/home');
            console.log("Team Deleted successfully")
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
