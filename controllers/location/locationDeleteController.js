/*
* @author Sai Krishna
*/
const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json()

// var sql = 'DELETE FROM location WHERE id = ?'
//     var params = [location.Id]
    

    app.delete("/location/delete", jsonParser, (req, res, next) => {
        console.log(req, " ----request is here")
      let  locationId  = req.body;
    
      let error = null;
       sqldb.get('DELETE FROM location WHERE id = ? ',[locationId], (err, response) => {
         
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