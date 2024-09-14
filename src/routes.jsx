import React from "react";
// import { lazy } from "@loadable/component";

import HomePage from "./Pages/Home";
import Contact from "./Pages/Contact";
import Landing from "./layouts/Landing";
import Page404 from "./Pages/common/Page404";
import Services from "./Pages/Services";
// const Home = lazy(() => import("./Pages/Home"));

const routes = [
	{
		path: "/",
		element: <Landing />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "contact", element: <Contact /> },
		],
	},
	{
		path: "",
		element: <Landing />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "services", element: <Services /> },
			{ path: "contact", element: <Contact /> },
		],
	},
	{
		path: "*",
		element: <Page404 />,
	},
];

export default routes;
