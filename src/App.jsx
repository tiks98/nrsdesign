import HomePage from "./Pages/Home";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import { Suspense } from "react";

function App() {
	const content = useRoutes(routes);
	return <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>;
}

export default App;
