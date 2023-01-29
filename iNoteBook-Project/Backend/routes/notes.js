const router = require("express").Router();

router.get("/", (_req, res) => {
  res.json({ message: "Hi everybody" });
});

module.exports = router;
