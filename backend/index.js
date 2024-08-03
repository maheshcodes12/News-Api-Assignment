const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const TopHeadLinesRoute = require("./routes/TopHeadlinesRoute.js");
const EverthingInNewsRoute = require("./routes/EverthingInNewsRoute.js");

const API_KEY = process.env.API_KEY;

dotenv.config({
	path: "./.env",
});

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
app.get("/", (req, res) => {
	res.json("Hello");
});
app.use("/topheadlines", TopHeadLinesRoute);
app.use("/everything", EverthingInNewsRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
