const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/auth/instagram", passport.authenticate("instagram"));

  app.get(
    "/auth/instagram/callback",
    passport.authenticate("instagram"),
    (req, res) => {
      res.send("AUTHENTICATED");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
