const express = require("express");
const { handleUserSignup, handleUserLogin  } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
// router.post("/certificate-maker", adddata);
router.post("/login", handleUserLogin);

module.exports = router;