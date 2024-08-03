import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Landing />}
					/>
					<Route
						path='/article'
						element={<Article />}
					/>
					<Route
						path='/*'
						element={<NotFound />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
