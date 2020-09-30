// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


// const express = require('express');
// const router  = express.Router();
// //login page
// router.get('/', (req,res)=>{
//     res.render('welcome');
// })
// //register page
// router.get('/register', (req,res)=>{
//     res.render('register');
// })

const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;

module.exports = router; 