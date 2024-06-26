const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy({
    //option for google start
    clientID : process.env.clientID,
    clientSecret: process.env.clientSecret
  }),()=>{
    // passport callback function
  }
)