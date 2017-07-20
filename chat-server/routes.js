'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');


var bodyParser = require('body-parser');
module.exports = function (app) {

    app.use('/api/customer', require('./api/customer'));
    app.use('/api/agent', require('./api/agent'));
    app.use('/api/domain', require('./api/domain'));
    app.use('/api/user', require('./api/user'));

    // All other routes should redirect to the index.html
    // app.route('/*')
    // app.get(function (req, res) {
    //     res.sendFile(path.resolve('user/index.js'));
    // })

}
