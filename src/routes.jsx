import React from "react";
// import { lazy } from "@loadable/component";

import HomePage from "./Pages/Home";
import Contact from "./Pages/Contact";
import Landing from "./layouts/Landing";
import Page404 from "./Pages/common/Page404";
import Services from "./Pages/Services";
import AboutUs from "./Pages/About";
// const Home = lazy(() => import("./Pages/Home"));

const routes = [
	{
		path: "/nrsdesign",
		element: <Landing />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "services", element: <Services /> },
			{ path: "about", element: <AboutUs /> },
			{ path: "contact", element: <Contact /> },
		],
	},
	// {
	// 	path: "",
	// 	element: <Landing />,
	// 	children: [
	// 		{ path: "", element: <HomePage /> },
	// 		{ path: "services", element: <Services /> },
	// 		{ path: "about", element: <AboutUs /> },
	// 		{ path: "contact", element: <Contact /> },
	// 	],
	// },
	{
		path: "*",
		element: <Page404 />,
	},
];

export default routes;
