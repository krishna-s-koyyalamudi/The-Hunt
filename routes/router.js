/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const router = express.Router()


const app = express();


// Manage top-level request first
router.get('/Home', (req, res, next) => {
  res.render('./partials/index', { title: 'The Hunt' })
})

router.get('/user/Login', (req, res, next) => {
  res.render('./user/loginpage', { title: 'Login', layout: false})
})


router.get('/user/Register', (req, res, next) => {
  res.render('./user/signuppage', { title: 'Register', layout: false})
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

// Route requests that start with an expression to a controller
// router.use('/user', require('../controllers/userController.js'))
// router.use('/team', require('../controllers/teamController.js'))
// router.use('/quest', require('../controllers/questController.js'))
// router.use('/player', require('../controllers/playerController.js'))
// router.use('/playerScore', require('../controllers/playerScoreController.js'))
// router.use('/location', require('../controllers/locationController.js'))
// router.use('/competition', require('../controllers/competitionController.js'))
// router.use('/clues', require('../controllers/cluesController.js'))



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