const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router
    .route('/classes')
    .get(controller.get)


module.exports = router