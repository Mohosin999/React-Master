const router = require("express").Router();

router.get("/", (_req, res) => {
  res.json({ message: "Successfully Shown" });
});

module.exports = router;
