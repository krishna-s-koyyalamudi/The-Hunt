const express = require('express')
const bodyparser = require("body-parser");
const app = express();
var db =  require("./database.js")

app.use(express.static("public"));

port = process.env.PORT || 80

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Login.html')
});

app.use(bodyparser.json({type:"application/*+json"}));

app.listen(port, () => {
  console.log('Example app listening on port 80!')
});
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


app.get("/register", (req,res)=>{
  res.send("This is where the user registers with mail,password and username");
} )

//app.post("/addcustomer", jsonparser, customer.addcustomer);
