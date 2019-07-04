'use strict';


var mongoose = require('mongoose'),
Article = mongoose.model('Articles');

exports.GetArticles = function (req, res) {
    Article.find({}, function (err, article) {
        if (err)
            res.send(err);
        res.json(article);
    });
};




exports.AddArticle = function (req, res) {
    var new_task = new Article(req.body);
    new_task.save(function (err, article) {
        if (err)
            res.send(err);
        res.json(article);
    });
};


exports.GetArticle = function (req, res) {
    Article.findById(req.params.taskId, function (err, article) {
        if (err)
            res.send(err);
        res.json(article);
    });
};


exports.UpdateArticle = function (req, res) {
    Article.findOneAndUpdate({
        _id: req.params.taskId
    }, req.body, {
        new: true
    }, function (err, article) {
        if (err)
            res.send(err);
        res.json(article);
    });
};


exports.DeleteArticle = function (req, res) {


    Article.remove({
        _id: req.params.taskId
    }, function (err, article) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task successfully deleted'
        });
    });
};