let mongoose = require('mongoose');

// create a model class fro questions
let question = mongoose.Schema({
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
},
{
    collection: "question"
});

module.exports = mongoose.model('question', question);