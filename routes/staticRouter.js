const express = require("express");
const cert = require("../models/cert")

const router = express.Router();

router.get("/", async (req, res) => {
  return res.render("home");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/seepdf", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allpdfs = await cert.find({ createdBy: req.user._id });
  return res.render("seepdf", {
    pdfs: allpdfs,
  });
});


router.get("/login", (req, res) => {
  return res.render("login");
});


module.exports = router;