import React from "react";
// import { Testimonials } from "./Testimonials";
// import { TeamIntro } from "./TeamIntro";
// import { TeamStats } from "./TeamStats";
// import { TrustedBy } from "./TrustedBy";
// import { Advantage } from "./Advantage";
import { ServicesCard } from "./ServicesCard";
import { Hero } from "./Hero";
import { Deploy, Design, Develop, Support } from "./Design";

const Home = () => {
	return (
		<>
			<div className="bg-white pb-6 sm:pb-16 lg:pb-24">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<Hero />
				</div>
				<ServicesCard />
				<Design />
				<hr className="visible mx-6 my-4 sm:visible md:invisible lg:invisible lg:my-0 xl:my-0" />
				<Develop />
				<hr className="visible mx-6 my-4 sm:visible md:invisible lg:invisible lg:my-0 xl:my-0" />
				<Deploy />
				<hr className="visible mx-6 my-4 sm:visible md:invisible lg:invisible lg:my-0 xl:my-0" />
				<Support />
			</div>
			{/* <Advantage /> */}
			{/* <TrustedBy /> */}
			{/* <TeamStats /> */}
			{/* <TeamIntro /> */}
			{/* <Testimonials /> */}
		</>
	);
};
export default Home;
