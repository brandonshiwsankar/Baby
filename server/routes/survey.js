let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const surveycontacts = require('../models/survey');

let passport = require('passport');

//connect to my business contact model
let Survey = require('../models/survey');

let surveyController = require('../controllers/survey');

//helper function for guard purposes
function requireAuth(req,res,next) 
{
    //check if user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Survey List page - READ OPeration */
router.get('/', surveyController.displaySurveyList);

/* GET route for displaying Add page - CREATE Operation */
router.get('/add', requireAuth, surveyController.displayAddPage);

/* POST route for processing Add page - CREATE Operation */
router.post('/add', requireAuth, surveyController.processAddPage);

/* GET route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, surveyController.displayEditPage);

/* POST route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, surveyController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, surveyController.performDelete);



module.exports = router;