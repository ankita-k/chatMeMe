'use strict';

var express = require('express');
var controller = require('./domain');

var router = express.Router();
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);

module.exports = router;