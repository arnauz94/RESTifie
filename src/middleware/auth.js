const jwt = require('jsonwebtoken');
UserController = require('../controllers/user-controller');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, 'your_secret_key');
    const userId = decodedToken.UserId;

    req.UserId = userId
    next();
  } catch(error) {
    res.status(401).json({
      error: 'Invalid token!'
    });
  }
};