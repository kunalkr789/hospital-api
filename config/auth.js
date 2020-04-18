const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

//include doctor model
const Doctor = require('../models/doctor');
let options = {
    jwtFromRequest : extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'corona'
};

//authentication using jwt
passport.use(new JWTStrategy(options, function(jwt_payload, done) {
    console.log(jwt_payload);
    Doctor.findById(jwt_payload._id, function(err, doctor) {
        if (err) {
            console.log("Error ", err);
            return done(err, false);
        }
        if (doctor) {
            console.log("doctor ", doctor);
            return done(null, doctor);
        } else {
            console.log("not found");
            return done(null, false);
        }
    });
}));

module.exports = passport;