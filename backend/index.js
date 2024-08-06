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
		origin: "*", // Allow all origins
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.json("Hello");
});

app.use("/topheadlines", TopHeadLinesRoute);
app.use("/everything", EverthingInNewsRoute);

module.exports = app; // Export the app
