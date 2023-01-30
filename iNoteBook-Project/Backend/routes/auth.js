const router = require("express").Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// create a user using : POST "/api/auth", doesn't require auth
router.post("/", (req, res) => {
  const user = User(req.body);
  user.save();
  res.send(user);
});

module.exports = router;
