import React from "react";
import "./main.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
