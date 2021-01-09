const express = require('express')
const UserController = require('../controllers/user-controller');

const auth = require('../middleware/auth')

const router = express.Router();

router.post('/', UserController.create);
router.get('/', auth, UserController.read);

module.exports = router;