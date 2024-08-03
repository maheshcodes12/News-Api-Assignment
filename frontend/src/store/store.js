import { configureStore } from "@reduxjs/toolkit";
import headlinesReducer from "./slices/headlinesSlice";
import everythingReducer from "./slices/everthingNewsSlice";

export const store = configureStore({
	reducer: {
		headlines: headlinesReducer,
		everything: everythingReducer,
	},
});
