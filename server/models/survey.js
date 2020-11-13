let mongoose = require('mongoose');

// create a model class surveyS
let survey = mongoose.Schema({
    name: String,
    author: String,
    email: String,
    question1: String,
    question2: String,
    question3: String,
},
{
    collection: "survey"
});

module.exports = mongoose.model('survey', survey);
