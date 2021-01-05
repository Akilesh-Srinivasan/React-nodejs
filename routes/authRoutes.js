
const passport = require('passport');
// module.exports will take the app object from index.js and export a function from this file.
// app is added as arg to the function from indx.js
module.exports = (app) => {
  // when user visits to this url '/auth/google', we will ask passprt to authenticate through google strategy
  // scope specifies what accesss/permission we want to have inside google like profile access and email access.
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  // this is for callback url
  app.get('/auth/google/callback', passport.authenticate('google'));
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })
  app.get('/api/currentuser', (req, res) => {
    res.send(req.user);
  });
};

