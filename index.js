const express = require('express')
const bodyparser = require("body-parser");
const app = express();
var db =  require("./database.js")

app.use(express.static("public"));

app.get('/', (req, res) => {
  //res.render('/index')
  res.sendFile(__dirname + '/Login.html')
  
});



app.use(bodyparser.json({type:"application/*+json"}));

app.get("/api/users", (req, res, next) => {
  var sql = "select * from user"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

//app.post("/addcustomer", jsonparser, customer.addcustomer);