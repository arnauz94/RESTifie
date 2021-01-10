const express = require('express');
const mongoose = require('mongoose');
const justify = require('./src/routes/justify-routes');
const token = require('./src/routes/token-routes');
const auth = require('./src/middleware/auth');

const app = express();
const port = 8000;

mongoose.Promise = global.Promise;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/justify', auth, justify);
app.use('/api/token', token);

app.use(function(req, res, next) {
  res.status(404).json({
    error: 'Page not found'
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`)
  mongoose.connect('mongodb://localhost/user_api_database',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
  });
  mongoose.connection
  .once('open',() => console.log("Connection to MongoDB established!"))
  .on('error',(error) => {
      console.warn('Warning',error);
  });
});
