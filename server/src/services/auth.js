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

    if (user !== null ) {
      return done(null, { id: user.id, teste:"samila" });
    }
    return done(new Error("Usuário não autorizado"), null);
    
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
