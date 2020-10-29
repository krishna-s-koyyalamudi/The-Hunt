const express = require('express')
const engines = require('consolidate')
const path = require('path')
const ejsLint = require('ejs-lint');
const expressLayouts = require('express-ejs-layouts')
const bodyparser = require("body-parser");
const app = express();
// var sqldb = require("./database.js")
const bodyParser = require("body-parser");


//set the root view folder
app.set('views', path.join(__dirname, './views'))

// specify desired view engine (EJS)
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts)

app.use(express.static("public"));

port = process.env.PORT || 3000

const router = require('./routes/router')
app.use('/', router)


app.use(bodyparser.json({ type: "application/*+json" }));

const db = require('./models/index');
const md5 = require('md5');

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await db.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}



async function seedDatabase() {
    console.log('Initialize the SQLite database with dummy data.');
    await db.sync({ force: true });
    // console.dir(db.models);

    // user

    await db.models.user.bulkCreate([
        { email: 'dcase@nwmissouri.edu', password: md5('dcase1') },
        { email: 'S538336@nwmissouri.edu', password: md5('vikas1') },
        { email: 'S538358@nwmissouri.edu', password: md5('prasad') },
        { email: 'S538365@nwmissouri.edu', password: md5('deekshith') },
        { email: 'S538293@nwmissouri.edu', password: md5('puneeth') },
        { email: 'S538361@nwmissouri.edu', password: md5('rajeshwari') },
        { email: 'S538098@nwmissouri.edu', password: md5('raju123') },
        { email: 'S538308@nwmissouri.edu', password: md5('rohith') },
        { email: 'S536845@nwmissouri.edu', password: md5('prasad') },
        { email: 'S538299@nwmissouri.edu', password: md5('harika') }
    ]);
    const numUsers = await db.models.user.count();
    console.info(`Seeded ${numUsers} users.`);

    // seed team
    await db.models.team.bulkCreate([
        {  teamName: 'Indians', creatorUserId: 1 },
        {  teamName: 'Americans', creatorUserId: 2 }
    ]);
    const numTeams = await db.models.team.count();
    console.info(`Seeded ${numTeams} teams.`);

    // seed quest
    await db.models.quest.bulkCreate([
        { questName: 'maskOn', creatorUserId: 1 },
        { questName: 'findMe', creatorUserId: 2 }
    ]);
    const numQuests = await db.models.quest.count();
    console.info(`Seeded ${numQuests} quests.`);

    // seed competition
    // await db.models.competition.bulkCreate([
        //   sqldb.run(sql3, ['Baahubali', 1])
        //   sqldb.run(sql3, ['Avengers', 2])
    // ]);
    // const numCompetitions = await db.models.competition.count();
    // console.info(`Seeded ${numCompetitions} competitions.`);
}

app.listen(port, async () => {

    try {
        await assertDatabaseConnectionOk();
        await seedDatabase();

        // console.log('Example app listening on port ' + port)
        console.log(`\nApp running at http://127.0.0.1:3000/user/Login mode`)
    } catch (err) {
        console.error(err.message);
    }
});


module.exports = router; 