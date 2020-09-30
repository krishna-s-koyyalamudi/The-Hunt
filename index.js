const express = require('express')
const bodyparser = require("body-parser");
const app = express();

app.use(express.static("public"));

port = process.env.PORT || 80

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Login.html')
});

app.use(bodyparser.json({type:"application/*+json"}));

app.listen(port, () => {
  console.log('Example app listening on port 80!')
});