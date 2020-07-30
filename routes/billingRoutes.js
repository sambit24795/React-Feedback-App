const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const requireLogin = require("../middlewares/auth");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 50000,
      currency: "INR",
      description: "Add 500rs per credit",
      source: req.body.id,
    });
    req.user.credits += 500;
    const user = await req.user.save();
    res.send(user);
  });
};
