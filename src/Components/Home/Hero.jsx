import React from "react";
import { Link } from "react-router-dom";
// import HeroImage from "./HeroImage";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { RevealLinks } from "./FlipText";
export function Hero() {
	return (
		<section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
			<div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
				<p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-2xl xl:text-3xl">
					Welcome to NRS Design
				</p>

				{/* <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
					Where Innovation Meets Creativity
				</h1> */}
				<RevealLinks />

				<p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
					At NRS Design, we turn ideas into visually stunning, high-performance
					websites that engage, inspire, and convert. With a passion for sleek,
					user-friendly design and the latest in web technologies, we help
					businesses of all sizes establish a strong online presence that drives
					growth.
				</p>

				{/* <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
					Whether you're looking for a clean and modern portfolio, an engaging
					eCommerce platform, or a dynamic corporate website, our team of
					experts is here to bring your vision to life. Our approach is
					client-focused, ensuring every project is customized to meet your
					unique needs and brand identity.
				</p> */}

				<div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
					<Link to="/nrsdesign/contact">
						<button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-3 px-8">
							<span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
							<span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
								Contact Us
							</span>
						</button>
					</Link>
				</div>
			</div>
			{/* <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
				<img
					src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
					loading="lazy"
					alt="by Fakurian Design"
					className="h-full w-full object-cover object-center"
				/>
			</div> */}
			<div className=" xl:h-auto xl:w-8/12 transform transition duration-300 hover:scale-110">
				{/* Deploy Animation */}
				{/* <DotLottieReact
					src="https://lottie.host/d7e766c1-d22f-4e70-bf18-12423d614224/44HDBLBKE0.lottie"
					loop
					autoplay
				/> */}

				{/* User Interaction */}
				{/* <DotLottieReact
					src="https://lottie.host/8288c541-3ec4-45a7-8fb0-993849eff1db/GH61RlAm6p.lottie"
					loop
					autoplay
				/> */}

				{/* Graphs and Charts  */}
				{/* <DotLottieReact
					src="https://lottie.host/e25511b9-15c9-49d1-8586-f7810cac19f2/Uv7Dn5OAYD.lottie"
					loop
					autoplay
				/> */}

				{/* Computer screen  */}
				{/* <DotLottieReact
					src="https://lottie.host/015bc128-dde2-46f1-bc31-8fe4bc41cc59/en6vhSlFVt.lottie"
					loop
					autoplay
				/> */}

				{/* team work */}
				{/* <DotLottieReact
					src="https://lottie.host/1c531ac6-ad21-47c1-a516-25f9497e691f/GajOu0fO0s.lottie"
					loop
					autoplay
				/> */}

				{/* Website building  */}
				{/* <DotLottieReact
					src="https://lottie.host/c9e2ebee-a7c7-4114-afdb-9c8c73504905/aZhgoKTef5.lottie"
					loop
					autoplay
				/> */}

				{/* Home Animation */}
				<DotLottieReact
					src="https://lottie.host/38f0ef06-067c-41fc-a0c2-4e9aeb05f6ae/jEPtYklMXP.lottie"
					loop
					autoplay
				/>

				{/* sitemap yml */}
				{/* <DotLottieReact
					src="https://lottie.host/876a6b1e-154c-4b10-a91e-6a9bf72a7ce2/RVuG2z5c6S.lottie"
					loop
					autoplay
				/> */}
				{/* <HeroImage
					// src={
					// 	"https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
					// }
					src={process.env.PUBLIC_URL + "/svg/building_website.svg"}
				/> */}
			</div>
		</section>
	);
}
