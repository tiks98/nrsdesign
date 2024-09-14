import React from "react";
// import { Testimonials } from "./Testimonials";
import { TeamIntro } from "./TeamIntro";
// import { TeamStats } from "./TeamStats";
// import { TrustedBy } from "./TrustedBy";
// import { Advantage } from "./Advantage";
import { ServicesCard } from "./ServicesCard";
import { Hero } from "./Hero";

const Home = () => {
	return (
		<>
			<div className="bg-white pb-6 sm:pb-16 lg:pb-24">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<Hero />
				</div>
			</div>
			<ServicesCard />
			{/* <Advantage /> */}
			{/* <TrustedBy /> */}
			{/* <TeamStats /> */}
			<TeamIntro />
			{/* <Testimonials /> */}
		</>
	);
};
export default Home;
