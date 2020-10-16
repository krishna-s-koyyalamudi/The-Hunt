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
router.get('/', (req, res, next) => {
  res.render('index', { title: 'The Hunt' })
})

router.get('/Login', (req, res, next) => {
  res.render('loginpage', { title: 'Login', layout: false})
})


router.get('/Register', (req, res, next) => {
  res.render('signuppage', { title: 'Register', layout: false})
})

router.get('/create_competition', (req, res, next) => {
  res.render('createCompetition', { title: 'Register'})
})


router.get('/forgotcod', (req, res, next) => {
  res.render('forgotcod', { title: 'Forgot password'})
})

router.get('/forgotemail', (req, res, next) => {
  res.render('forgotemail', { title: 'Fotgot email'})
})

router.get('/newPassword', (req, res, next) => {
  res.render('newpassword', { title: 'New Password', layout: false})
})

router.get('/createScreen', (req, res, next) => {
  res.render('createScreen', { title: 'Create Screen'})
})

router.get('/quest', (req, res, next) => {
  res.render('questCreate', { title: "Quest"})
})

router.get('/profile', (req, res, next) => {
  res.render('profile', { title: "profile"})
})


router.get('/createTeam', (req, res, next) => {
  res.render('createTeam', { title: "profile"})
})


router.get('/invitePlayers', (req, res, next) => {
  res.render('invitePlayers', { title: "Invite Players"})
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
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// error handler
router.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500)
  res.render('error', { status: err.status, message: err.message })
})

module.exports = router;