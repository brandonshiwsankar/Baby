let mongoose = require('mongoose');

// create a model class
let survey = mongoose.Schema({
    name: String,
    author: String,
    email: String,
},
{
    collection: "survey"
});

module.exports = mongoose.model('survey', survey);
