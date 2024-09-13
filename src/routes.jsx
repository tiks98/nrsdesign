import React from "react";
// import { lazy } from "@loadable/component";

import HomePage from "./Pages/Home";
import Contact from "./Pages/Contact";
// const Home = lazy(() => import("./Pages/Home"));

const routes = [
	{
		path: "/",
		element: <HomePage />,
		// children: [
		//     { path: "", element: <Home /> },
		//     { path: "FAQ", element: <FAQ /> },
		// ],
	},
	{
		path: "",
		element: <HomePage />,
		// children: [
		//     { path: "", element: <Home /> },
		//     { path: "FAQ", element: <FAQ /> },
		// ],
	},
	{
		path: "contact",
		element: <Contact />,
		// children: [
		//     { path: "", element: <Home /> },
		//     { path: "FAQ", element: <FAQ /> },
		// ],
	},
];

export default routes;
