const express = require('express')
const engines = require('consolidate')
const path = require('path')
const ejsLint = require('ejs-lint');
const expressLayouts = require('express-ejs-layouts')
const bodyparser = require("body-parser");
const app = express();
var sqldb = require("./database.js")
const bodyParser = require("body-parser");


//set the root view folder
app.set('views', path.join(__dirname, './views'))

// specify desired view engine (EJS)
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)


app.use(bodyParser.urlencoded({extended: true}));
app.use(expressLayouts)

app.use(express.static("public"));

port = process.env.PORT || 3000

const router = require('./routes/router')
app.use('/', router)


app.use(bodyparser.json({ type: "application/*+json" }));


app.listen(port, () => {
    // console.log('Example app listening on port ' + port)
    console.log(`\nApp running at http://127.0.0.1:3000/user/Login mode`)
});


module.exports = router; 