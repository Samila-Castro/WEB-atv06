const passport = require("passport");
const passportJWT = require("passport-jwt");
const { User } = require('../../app/models'); 
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: "secret",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

function getStrategy(){
  return new Strategy(params, async function (payload, done) {
    var user = await User.findByPk(payload.id);

    if (user.length ) {
      return done(null, { id: user[0].id, type: user[0].type });
    }
    return done(new Error("User not found"), null);
    
  });
}

function initialize() {
  passport.use(getStrategy());
  return passport.initialize();
};

function authenticate() {
  passport.use(getStrategy());
  return passport.authenticate("jwt", { session: false });
};

module.exports = {
  initialize,
  authenticate

}
