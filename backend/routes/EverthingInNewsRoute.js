const express = require("express");
const router = express();
const getEverythingInNews = require("../controllers/Everything.js");

router.get("/", getEverythingInNews);

module.exports = router;
