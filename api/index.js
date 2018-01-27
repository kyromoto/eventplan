var express = require('express');

var router  = express.Router();

router.use('/todo', require('./todo'));
router.use('/job', require('./job'));

module.exports = router;
