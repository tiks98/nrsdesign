import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ServicesCard = () => {
	return (
		<section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
			<div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
				<h2 className="max-w-lg text-4xl font-bold md:text-5xl">
					Grow faster with our <br />
					<span className="text-slate-400"> all in one solution</span>
				</h2>
				<Link to="/nrsdesign/services">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700">
						Learn more
					</motion.button>
				</Link>
			</div>
			<div className="mb-4 grid grid-cols-12 gap-4">
				<BounceCard className="col-span-12 md:col-span-4">
					<CardTitle>Design</CardTitle>
					<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
						<span className="block text-center text-lg sm:text-lg md:text-lg lg:text-2xl font-semibold text-indigo-50">
							User-Centric Designs 🧑‍🎨
						</span>
						<span className="block text-center text-lg sm:text-lg md:text-lg lg:text-2xl font-semibold text-indigo-50">
							Stunning Visuals 🖼️
						</span>
						<span className="block text-center text-lg sm:text-lg md:text-lg lg:text-2xl font-semibold text-indigo-50">
							Sleek, Intuitive Interfaces 📱
						</span>
					</div>
				</BounceCard>
				<BounceCard className="col-span-12 md:col-span-8">
					<CardTitle>Develop</CardTitle>
					<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-orange-50">
							Seamless, Responsive Websites 💫
						</span>
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-orange-50">
							Scalable Web Development 👨‍💻
						</span>
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-orange-50">
							Speed, Security, and Performance 🏎️
						</span>
					</div>
				</BounceCard>
			</div>
			<div className="grid grid-cols-12 gap-4">
				<BounceCard className="col-span-12 md:col-span-8">
					<CardTitle>Deploy</CardTitle>
					<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-emerald-50">
							Seamless Integration 🤝
						</span>
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-emerald-50">
							Hassle-Free Web Deployments 🚀
						</span>
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-emerald-50">
							From Concept to Completion, Effortlessly ✅
						</span>
					</div>
				</BounceCard>
				<BounceCard className="col-span-12 md:col-span-4">
					<CardTitle>Support</CardTitle>
					<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-red-50">
							Monitoring & Care 🩺
						</span>
						<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-red-50">
							Regular Updates, Security, and Optimization ⚙️
						</span>
					</div>
				</BounceCard>
			</div>
		</section>
	);
};

const BounceCard = ({ className, children }) => {
	return (
		<motion.div
			whileHover={{ scale: 0.95, rotate: "-1deg" }}
			className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}>
			{children}
		</motion.div>
	);
};

const CardTitle = ({ children }) => {
	return (
		<h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
	);
};
