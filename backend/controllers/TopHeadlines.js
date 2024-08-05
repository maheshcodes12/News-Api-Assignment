const axios = require("axios");
const NewsAPI = require("newsapi");
const NodeCache = require("node-cache");
const dotenv = require("dotenv");
dotenv.config({
	path: "./.env",
});
const API_KEY = process.env.API_KEY;
const newsapi = new NewsAPI(API_KEY);
const cache = new NodeCache({ stdTTL: 300 });

const getTopHeadlines = (req, res) => {
	const cacheKey = "topHeadlines";

	const params = {};
	params.q = req.query.q || "india";
	if (req.query.country) params.country = req.query.country;
	if (req.query.catagory) params.catagory = req.query.catagory;
	if (req.query.sources) params.sources = req.query.sources;

	const cacheData = cache.get(cacheKey);

	if (
		cacheData &&
		JSON.stringify(cacheData.params) === JSON.stringify(params)
	) {
		return res
			.status(200)
			.json({ success: true, headlines: cacheData.response, cache: true });
	}

	newsapi.v2
		.topHeadlines(params)
		.then((response) => {
			const cacheDataToBeStored = { response: response, params: params };
			cache.set(cacheKey, cacheDataToBeStored);
			res.status(200).json({ success: true, headlines: response });
		})
		.catch((error) => {
			res
				.status(404)
				.json({ success: false, message: "Cannot get top headlines" });
		});
};
module.exports = getTopHeadlines;
