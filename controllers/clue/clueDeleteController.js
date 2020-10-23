// /*
// * @author Harika Kulkarni
// */
// const express = require('express');
// const app = express.Router();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// var jsonParser = bodyParser.json()

// // var sql = 'DELETE FROM clue WHERE id = ?'
// //     var params = [clue.Id]
    

//     app.delete("/clue/delete", jsonParser, (req, res, next) => {
//         console.log(req, " ----request is here")
//       let  clueId  = req.body;
    
//       let error = null;
//        sqldb.get('DELETE FROM clue WHERE id = ? ',[clueId], (err, response) => {
//           if (err) {
//               console.error('Unable to delete clue', err);
//               error = 'Unable to delete clue';
//           } else if (!err && !response) {
//               console.log("clue not found")
//           } else {
//             //   res.render('./partials/home');
//             console.log("clue Deleted successfully")
//           }
//           console.log(err, res);
//       })
//     })

//     async function del(req, res, next) {
//       try {
//         const id = parseInt(req.params.id, 10);
     
//         const success = await employees.delete(id);
     
//         if (success) {
//           res.status(204).end();
//         } else {
//           res.status(404).end();
//         }
//       } catch (err) {
//         next(err);
//       }
//     }

//     module.exports = app;