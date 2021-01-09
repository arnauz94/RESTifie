const express = require('express')
const justifyController = require('../controllers/justiffy-controller');

var router = express.Router();

router.post('/', justifyController.justify);

module.exports = router;