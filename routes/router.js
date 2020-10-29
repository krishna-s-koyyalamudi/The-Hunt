/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const bodyParser = require('body-parser');
const md5 = require('md5')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
const sqldb = require('.././database')
const axios = require('axios')
var jsonParser = bodyParser.json()

const userLoginController =  require('../controllers/user/Login')
const userRegisterController = require('../controllers/user/userSignupController')


// app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.render('./user/loginpage', { title: 'Login', layout: false})
})



router.get('/index', (req, res) => {
  res.render('./user/loginpage', { title: 'Login', layout: false})
})



// Manage top-level request first
router.get('/Home', (req, res, next) => {
  res.render('./partials/index', { title: 'The Hunt' })
})

router.get('/user/Login', (req, res, next) => {
  res.render('./user/loginpage', { title: 'Login', layout: false})
})


router.get('/user/Register', (req, res, next) => {
  res.render('./user/signuppage', { title: 'Register', layout: false, require: axios})
})

router.get('/user/forgotcode', (req, res, next) => {
  res.render('./user/forgotcode', { title: 'Forgot password', layout: false})
})

router.get('/user/forgotemail', (req, res, next) => {
  res.render('./user/forgotemail', { title: 'Fotgot email', layout: false})
})

router.get('/user/newPassword', (req, res, next) => {
  res.render('./user/newpassword', { title: 'New Password', layout: false})
})

router.get('/404' , (req, res, next) => {
  res.render('./partials/error', { title: 'Error', layout: false})
})

router.get('/create_competition', (req, res, next) => {
  res.render('./competition/create', { title: 'Register'})
})

router.get('/createScreen', (req, res, next) => {
  res.render('createScreen', { title: 'Create Screen'})
})

router.get('/quest/createQuest', (req, res, next) => {
  res.render('./quest/create', { title: "Quest"})
})

router.get('/user/profile', (req, res, next) => {
  res.render('./player/details', { title: "profile"})
})


router.get('/team/createTeam', (req, res, next) => {
  res.render('./team/create', { title: "Team"})
})


router.get('/team/invitePlayers', (req, res, next) => {
  res.render('./team/invitePlayers', { title: "Invite Players"})
}) 
router.get('/location/delete', (req, res, next) => {
  res.render('./location/delete', { title: "Locationdelete"})
})

// router.use('/api/user/Regitser' , jsonParser, (req, res, next) => {
//   console.log(req.body,"---request is here")
//   var errors = []
//   if (!req.body.password) {
//     errors.push("No password specified");
//   }
//   if (!req.body.email) {
//     errors.push("No email specified");
//   }
//   if (errors.length) {
//     res.status(400).json({ "error": errors.join(",") });
//     return;
//   }
//   var data = {
//   //  userName : req.body.userName,
//     email: req.body.email,
//     password: md5(req.body.password)
//   }
//   var sql = 'INSERT INTO user (email, password) VALUES (?,?)'
//   var params = [data.email, data.password]
//   sqldb.run(sql, params, function (err, result) {
//     if (err) {
//       res.status(400).json({ "error": err.message })
//       return;
//     }
//     res.json({
//       "message": "success",
//       "data": data,
//       // "userName": this.lastuserName
//     })
// })
// })

// router.use('/ap/user/Login' , jsonParser, (req, res, next) => {
//   let { email, password } = req.body;
//   let error = null;
//   sqldb.get('select * from user where email = ? and password = ?', [email, md5(password)], (err, response) => {
//       if (err) {
//           console.error('Error trying to login', err);
//           error = 'Error trying to login to application';
//           res.render('login', { error: error });
//       } else if (!err && !response) {
//           console.log("Username or password invalid")
//       } else {
//           res.render('./partials/home');
//       }
//       console.log(err, res);
//   })
// })

//  router.post('/user/login', function(req, res) {
//    res.req("/controllers/userController")
//  })



// Route requests that start with an expression to a controller
router.use('/user', require('../controllers/user/userController'))
router.use('/user/Login', userLoginController)
router.use('/user/userSignupController', userRegisterController)
router.use('/team', require('../controllers/team/teamController'))
router.use('/quest', require('../controllers/quest/questController'))
router.use('/quest/delete', require('../controllers/quest/questDeleteController'))
router.use('/player', require('../controllers/player/playerController'))
router.use('/playerScore', require('../controllers/playerscore/playerscoreController'))
router.use('/location', require('../controllers/location/locationController'))
router.use('/competition', require('../controllers/competition/competitionController'))
router.use('/clues', require('../controllers/clue/clueController'))



// catch 404 and forward to error handler
// router.use((req, res, next) => {
//   const error = new Error('Not Found')
//   error.status = 404
//   next(error)
// })

// // error handler
// router.use((err, req, res, next) => {
//   // render the error page
//   res.status(err.status || 500)
//   res.render('../views/partials/error', { status: err.status, message: err.message })
// })


module.exports = router;