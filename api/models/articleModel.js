'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    name: {
        type: String,
        required: 'Name requiered'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Articles', ArticleSchema);