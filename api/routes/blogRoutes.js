module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.GetArticles)
        .post(todoList.AddArticle);


    app.route('/tasks/:taskId')
        .get(todoList.GetArticle)
        .put(todoList.UpdateArticle)
        .delete(todoList.DeleteArticle);
};