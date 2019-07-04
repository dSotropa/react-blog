var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Article = require('./api/models/articleModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('REACT BLOG RESTful API server started on: ' + port);