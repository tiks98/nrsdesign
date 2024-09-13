import React from "react";
import { Outlet } from "react-router-dom";

import Main from "../Components/Main";
import Content from "../Components/Content";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
// import Container from "react-bootstrap/Container";
const Landing = ({ children }) => (
	<Main>
		{/* <Container> */}
		<Navbar />
		<Content>
			{children}
			<Outlet />
		</Content>
		{/* </Container> */}
		<Footer />
	</Main>
);

export default Landing;
