import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopHeadlines } from "../../services/getNews";

export const fetchData = createAsyncThunk(
	"data/fetchData",
	async ({ q, sources, country, catagory }) => {
		const response = await getTopHeadlines({
			q,
			sources,
			country,
			catagory,
		});
		return response;
	}
);

export const headlinesSlice = createSlice({
	name: "headlines",
	initialState: {
		items: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default headlinesSlice.reducer;
