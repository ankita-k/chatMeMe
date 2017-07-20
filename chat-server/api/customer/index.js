'use strict';

var express = require('express');
var controller = require('./customer');

var router = express.Router();
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/showCustomer',controller.showCustomer);
module.exports = router;
