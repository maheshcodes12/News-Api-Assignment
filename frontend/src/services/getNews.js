import axios from "axios";
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

export const getEverythingInNews = async ({
	q = "",
	sources = "",
	from = "",
	to = "",
	language = "en",
	sortBy = "publishedAt",
}) => {
	try {
		const response = await axios.get(`${BACKEND_URI}/everything`, {
			params: {
				q: q.trim(),
				sources: sources,
				from: from,
				to: to,
				language: language,
				sortBy: sortBy,
			},
		});
		if (response.status != 200) return [];
		return response?.data?.everything?.articles;
	} catch (e) {
		console.log(e);
		return [];
	}
};
export const getTopHeadlines = async ({
	q = "",
	country = "",
	catagory = "",
	sources = "",
}) => {
	try {
		const response = await axios.get(`${BACKEND_URI}/topheadlines`, {
			params: {
				q: q,
				country: country,
				catagory: catagory,
				sources: sources,
			},
		});

		if (response?.response?.status != 200) return [];
		return response?.data?.headlines?.articles;
	} catch (e) {
		console.log(e);
		return [];
	}
};
