import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { RevealLinks } from "./FlipText";

export function Hero() {
	const [textRef, textInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [imageRef, imageInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
			{/* Text Content */}
			<div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
				<p
					ref={textRef}
					className={`mb-4 font-semibold text-indigo-500 dark:text-indigo-400 md:mb-6 md:text-2xl xl:text-3xl ${
						textInView ? "animate-fadeInUp" : "opacity-0 -translate-y-4"
					}`}>
					Welcome to NRS Design
				</p>

				<div
					className={`${
						textInView ? "animate-fadeInUp delay-300" : "opacity-0"
					}`}>
					<RevealLinks />
				</div>

				<p
					className={`mb-8 leading-relaxed text-gray-500 dark:text-gray-300 md:mb-12 lg:w-4/5 xl:text-lg ${
						textInView
							? "animate-fadeInUp delay-500"
							: "opacity-0 -translate-y-4"
					}`}>
					At NRS Design, we turn ideas into visually stunning, high-performance
					websites that engage, inspire, and convert. With a passion for sleek,
					user-friendly design and the latest in web technologies, we help
					businesses of all sizes establish a strong online presence that drives
					growth.
				</p>

				<div
					className={`flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start ${
						textInView
							? "animate-fadeInUp delay-700"
							: "opacity-0 -translate-y-4"
					}`}>
					<Link to="/nrsdesign/contact">
						<button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-3 px-8 dark:bg-indigo-500 dark:hover:bg-indigo-600">
							<span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
							<span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white dark:text-white">
								Contact Us
							</span>
						</button>
					</Link>
				</div>
			</div>

			{/* Animation Container */}
			<div
				ref={imageRef}
				className={`xl:h-auto xl:w-8/12 transform transition duration-300 hover:scale-110 ${
					imageInView ? "animate-slideInRight" : "opacity-0 translate-x-20"
				}`}>
				<DotLottieReact
					src="https://lottie.host/38f0ef06-067c-41fc-a0c2-4e9aeb05f6ae/jEPtYklMXP.lottie"
					loop
					autoplay
				/>
			</div>
		</section>
	);
}
