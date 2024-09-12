import { Footer } from "./Footer";
import { Testimonials } from "./Testimonials";
import { TeamIntro } from "./TeamIntro";
import { TeamStats } from "./TeamStats";
import { TrustedBy } from "./TrustedBy";
import { Advantage } from "./Advantage";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import React from "react";

const Home = () => {
	return (
		<>
			{/* Landing Section Started */}
			<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<Navbar />
					<Hero />
				</div>
			</div>
			{/* Landing Section Ended */}
			{/* Advantage Section Started */}
			<Advantage />
			{/* Advantage Section Ended  */}
			{/* Trusted By Section Started */}
			<TrustedBy />
			{/* Trusted By Section Ended */}
			{/* Team Stats Section Started */}
			<TeamStats />
			{/* Team Stats Section Ended */}
			{/* Team Intro Section Started */}
			<TeamIntro />
			{/* Team Intro Section Ended */}
			{/* Testimonials Section Started */}
			<Testimonials />
			{/* Testimonials Section Ended */}
			{/* Footer Started  */}
			<Footer />
			{/* Footer Ended  */}
		</>
	);
};
export default Home;
