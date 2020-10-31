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

const userLoginController = require('../controllers/user/Login')
const userRegisterController = require('../controllers/user/userSignupController')


// app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.render('./user/loginpage', { title: 'Login', layout: false })
})



router.get('/index', (req, res) => {
    res.render('./user/loginpage', { title: 'Login', layout: false })
})



// Manage top-level request first
router.get('/Home', (req, res, next) => {
    res.render('./partials/index', { title: 'The Hunt' })
})

router.get('/user/Login', (req, res, next) => {
    res.render('./user/loginpage', { title: 'Login', layout: false })
})


router.get('/user/Register', (req, res, next) => {
    res.render('./user/signuppage', { title: 'Register', layout: false, require: axios })
})

router.get('/user/forgotcode', (req, res, next) => {
    res.render('./user/forgotcode', { title: 'Forgot password', layout: false })
})

router.get('/user/forgotemail', (req, res, next) => {
    res.render('./user/forgotemail', { title: 'Fotgot email', layout: false })
})

router.get('/user/newPassword', (req, res, next) => {
    res.render('./user/newpassword', { title: 'New Password', layout: false })
})

router.get('/404', (req, res, next) => {
    res.render('./partials/error', { title: 'Error', layout: false })
})

router.get('/create_competition', (req, res, next) => {
    res.render('./competition/create', { title: 'Register' })
})
router.get('/competition/delete', (req, res, next) => {
    res.render('./competition/delete', { title: 'Delete Competition' })
})
router.get('/competition/details', (req, res, next) => {
    res.render('./competition/details', { title: 'Details of Competition' })
})

router.get('/competition', (req, res, next) => {
    res.render('./competition/index', { title: 'Competition' })
})

router.get('/createScreen', (req, res, next) => {
    res.render('createScreen', { title: 'Create Screen' })
})

router.get('/quest/createQuest', (req, res, next) => {
    res.render('./quest/create', { title: "Quest" })
})

router.get('/quest', (req, res, next) => {
    res.render('./quest/index', { title: "Quest" })
})

router.get('/quest/details', (req, res, next) => {
    res.render('./quest/details', { title: "Quest details" })
})
router.get('/quest/delete', (req, res, next) => {
    res.render('./quest/delete', { title: "Delete Quest" })
})

router.get('/quest/edit', (req, res, next) => {
    res.render('./quest/edit', { title: "Edit Quest" })
})

router.get('/user/profile', (req, res, next) => {
    res.render('./player/details', { title: "profile" })
})


router.get('/team/createTeam', (req, res, next) => {
    res.render('./team/create', { title: "Team" })
})


router.get('/team/teamInvite', (req, res, next) => {
    res.render('./team/teamInvite', { title: "Team" })
})


router.get('/team/invitePlayers', (req, res, next) => {
    res.render('./team/invitePlayers', { title: "Invite Players" })
})
router.get('/location/delete', (req, res, next) => {
    res.render('./location/delete', { title: "Locationdelete" })
})

router.get('/location/create', (req, res, next) => {
    res.render('./location/create', { title: "Create Location" })
})


        

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