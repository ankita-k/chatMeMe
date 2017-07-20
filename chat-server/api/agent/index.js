'use strict';

var express = require('express');
var controller = require('./agent');
var router = express.Router();
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/login',controller.login);
router.post('/agentNameCheck',controller.agentNameCheck );
router.post('/registerAgent',controller.registerAgent );

module.exports = router;


 
