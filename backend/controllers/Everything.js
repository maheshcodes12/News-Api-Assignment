const axios = require("axios");
const NewsAPI = require("newsapi");
const NodeCache = require("node-cache");
const newsapi = new NewsAPI("2557e2321172465cafcafef6a344ffb7");

const cache = new NodeCache({ stdTTL: 300 });

const getEverthingInNews = (req, res) => {
	const cacheKey = "everything";

	const params = {};
	if (req.query.q?.length > 3) params.q = req.query.q;
	else params.q = "india";
	if (req.query.sources) params.sources = req.query.sources;
	if (req.query.from) params.from = req.query.from;
	if (req.query.to) params.to = req.query.to;
	if (req.query.language) params.language = req.query.language;
	if (req.query.sortBy) params.sortBy = req.query.sortBy || "relevancy";

	const cachedData = cache.get(cacheKey);

	if (
		cachedData &&
		JSON.stringify(cachedData.params) === JSON.stringify(params)
	) {
		cachedData.params = params;
		return res
			.status(200)
			.json({ success: true, everything: cachedData.response, cached: true });
	}
	newsapi.v2
		.everything({ ...params })
		.then((response) => {
			const cacheDataToBeStored = { response: response, params: params };
			cache.set(cacheKey, cacheDataToBeStored);
			return res.status(200).json({ success: true, everything: response });
		})
		.catch((response) => {
			console.log(response);

			res
				.status(404)
				.json({ success: false, message: "Cannot get everything in news" });
		});
};
module.exports = getEverthingInNews;
