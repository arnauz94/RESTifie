const jwt = require('jsonwebtoken');
UserController = require('../controllers/user-controller');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, 'iyU0QAcBHcqScHD4wwWB0Vum5CobZA65eEVa0uMLT7');
    const userId = decodedToken.UserId;

    req.UserId = userId
    next();
  } catch(error) {
    res.status(401).json({
      error: 'Invalid token!'
    });
  }
};