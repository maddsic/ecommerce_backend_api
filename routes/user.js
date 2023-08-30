const router = require("express").Router();

router.get("/usertest", (req, res) => console.log("User Test"));

router.post("/userpost", (req, res) => {
  const username = req.body.username;
  console.log(username);
});

module.exports = router;
