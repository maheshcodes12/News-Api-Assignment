const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const TopHeadLinesRoute = require("./routes/TopHeadlinesRoute.js");
const EverthingInNewsRoute = require("./routes/EverthingInNewsRoute.js");

dotenv.config({
	path: "./.env",
});

app.use(
	cors({
		origin: ["https://news-api-assignment-3mqm.vercel.app/"],
		methods: ["POST", "GET"],
		credentials: true,
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.json("Hello");
});

app.use("/topheadlines", TopHeadLinesRoute);
app.use("/everything", EverthingInNewsRoute);

module.exports = app; // Export the app
