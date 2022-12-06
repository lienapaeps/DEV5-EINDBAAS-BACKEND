const passport = require('passport');
const User = require('../models/user');

// hoe een gebruiker zich moet registreren en inloggen
// beveiligen van routes
passport.use(User.createStrategy()); 