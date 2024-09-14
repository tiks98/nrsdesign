import React from "react";
import HeroImage from "../Home/HeroImage";

export function About() {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12 mb-24">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					<div>
						<div className="h-64 overflow-hidden rounded-lg bg-white-100 md:h-full lg:h-full">
							{/* <img
								src={process.env.PUBLIC_URL + "/images/About.jpg"}
								loading="lazy"
								alt="by Martin Sanchez"
								 className="h-full w-full object-cover object-center"
							/> */}
							<HeroImage src={process.env.PUBLIC_URL + "/images/About.jpg"} />
						</div>
					</div>

					<div className="md:pt-8">
						<p className="text-center text-xl font-bold text-indigo-500 md:text-left">
							Who we are
						</p>

						<h1 className="mb-4 text-center text-4xl font-bold text-gray-800 sm:text-5xl md:mb-6 md:text-left">
							About Us
						</h1>

						<p className="mb-6 text-gray-500 sm:text-2xl md:mb-8">
							Welcome to NRS Design, where creativity meets precision. Nestled
							in the heart of Barrie, ON, we are a small, passionate start-up
							with a bold vision: to transform ideas into digital masterpieces.
							Every project we undertake is designed with care, developed with
							cutting-edge technology, and deployed with flawless execution.
							<br />
							<br />
							At NRS Design, we believe in the power of simplicity and elegance.
							Our team is dedicated to delivering intuitive, user-focused
							designs that not only capture attention but also drive success. We
							may be small, but our ambition is vast—empowering businesses, like
							yours, to thrive in the digital world.
						</p>

						{/* <h2  className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
							About us
						</h2>

						<p  className="mb-6 text-gray-500 sm:text-lg md:mb-8">
							This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is random or otherwise generated. It may be used to
							display a sample of fonts or generate text for testing. Filler
							text is dummy text which has no meaning however looks very similar
							to real text.
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}
