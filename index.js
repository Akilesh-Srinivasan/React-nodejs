// require is similar to import statement
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const coockieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');
//mongoose is used to connect JS to mongo db
mongoose.connect(keys.mongoURI);
// app object represents the route handler with get http request
const app = express();
// app.use is wiring to midlleware- preprocessing the incoming request
app.use(
  // extracts cookie data and assigns it to req.session in passport
  // cookie contains all the data in the current session - 14kbs
  // express session works by storing a reference to a session-id/session-store
  coockieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
// the require statement returns a function from authRoutes.js with an 
// immediate callback function with the app object.
require('./routes/authRoutes')(app);
//instructs node to listen to port 5000
// environemnt variable has PORT or use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);