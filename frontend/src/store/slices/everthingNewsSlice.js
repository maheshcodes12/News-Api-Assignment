import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEverythingInNews } from "../../services/getNews";

export const fetchDataForEverythingNews = createAsyncThunk(
	"everythingNews/fetchData",
	async ({ q, sources, from, to, language, sortBy }) => {
		const response = await getEverythingInNews({
			q,
			sources,
			from,
			to,
			language,
			sortBy,
		});
		return response;
	}
);

export const evertythingNewsSlice = createSlice({
	name: "everythingNews",
	initialState: {
		items: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDataForEverythingNews.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchDataForEverythingNews.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchDataForEverythingNews.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default evertythingNewsSlice.reducer;
