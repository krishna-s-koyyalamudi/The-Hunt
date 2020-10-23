const express = require('express')
const app = express.Router();

const md5 = require('md5');
const Model = require('../../models/user')
const sqldb = require('../../database.js')

app.post("/Register", (req, res, next) => {
    var errors = []
    if (!req.body.password) {
        errors.push("No password specified");
    }
    if (!req.body.email) {
        errors.push("No email specified");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var data = {
        //  userName : req.body.userName,
        email: req.body.email,
        password: md5(req.body.password)
    }
    var sql = 'INSERT INTO user (email, password) VALUES (?,?)'
    var params = [data.email, data.password]
    sqldb.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            // "userName": this.lastuserName
        })
    });
})

module.exports = app;



//   app.patch("/api/user/:id", (req, res, next) => {
//     var data = {
//       UserName: req.body.userName,
//       email: req.body.email,
//       password: req.body.password ? md5(req.body.password) : undefined
//     }
//     db.run(
//       `UPDATE user set 
//            userName = coalesce(?,userName), 
//            email = COALESCE(?,email), 
//            password = coalesce(?,password) 
//            WHERE userId = ?`,
//       [data.userName, data.email, data.password, req.params.userId],
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



//     app.delete("/api/user/:id", (req, res, next) => {
//     db.run(
//       'DELETE FROM user WHERE id = ?',
//       req.params.id,
//       function (err, result) {
//         if (err) {
//           res.status(400).json({ "error": res.message })
//           return;
//         }
//         res.json({ "message": "deleted", rows: this.changes })
//       });
//   })

// app.post("/signup", jsonParser, (req, res, next) => {
//     console.log(req, " ----request is here")
//     let{email,password,password1}=req.body;

//     let error = null;
//     if(!email || !password || !password1){
//         error.push({msg:'Please enter all fields'});
//     }
//     else{
//     sqldb.get('select email from user where email = ?',[email],(err,response)=>{

//             console.log(response);
//             if(response.length>0){
//                 console.log('Inside email response');
//                 error.push({msg:'Email ID is already taken'});
//                 res.render
//             }else {
//                 sqldb.post('Insert into user (email,password) VALUES (?,?)')
//             }

//     });
// }