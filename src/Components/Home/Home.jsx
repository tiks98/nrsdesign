import React from "react";
import { Testimonials } from "./Testimonials";
import { TeamIntro } from "./TeamIntro";
import { TeamStats } from "./TeamStats";
// import { TrustedBy } from "./TrustedBy";
import { Advantage } from "./Advantage";
import { Hero } from "./Hero";

const Home = () => {
	return (
		<>
			<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<Hero />
				</div>
			</div>
			<Advantage />
			{/* <TrustedBy /> */}
			<TeamStats />
			<TeamIntro />
			<Testimonials />
		</>
	);
};
export default Home;
