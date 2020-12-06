let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const survey = require('../models/survey');

// create a reference to the model
let Survey = require('../models/survey');
let Question = require('../models/question');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, survey) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('survey/list', 
            {title: 'Surveys', 
            SurveyList: survey,
            displayName: req. user ? req.user.displayName: ''})            
        }
    });
};


module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', {title: 'Add a new Survey',
    displayName: req.user ? req.user.displayName : ''})
};

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "author": req.body.author,
        "email": req.body.email,
        "question1":req.body.question1,
        "question2":req.body.question2,
        "question3":req.body.question3,
        "question4":req.body.question4,
        "question5":req.body.question5

    });

    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the survey list
            res.redirect('/survey');
        }
    });
    
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/edit', {title: 'Edit an existing Survey', survey: surveyToEdit,
            displayName: req. user ? req.user.displayName: ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey ({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "email": req.body.email,
        "question1":req.body.question1,
        "question2":req.body.question2,
        "question3":req.body.question3,
        "question4":req.body.question4,
        "question5":req.body.question5
        
    });
    
    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the Survey list
            res.redirect('/survey');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the Survey list
            res.redirect('/survey');
        }
    });
}