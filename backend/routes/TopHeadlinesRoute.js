const express = require("express");
const router = express();
const getTopHeadlines = require("../controllers/TopHeadlines.js");

router.get("/", getTopHeadlines);

module.exports = router;
