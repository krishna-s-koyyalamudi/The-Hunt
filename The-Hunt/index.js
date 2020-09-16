const express = require('express')
const path = require('path')

const bodyParser = require("body-parser")

const app = express();
//app.use(express.staticProvider(__dirname + '/public'));

app.use(express.static('public'))
// app.use(express.static('files'))
//app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html')
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
  });

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  });

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});