import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const staggerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

export const ServicesCard = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={staggerVariants}
			className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
			<motion.div
				variants={cardVariants}
				className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
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
			</motion.div>

			<motion.div
				variants={staggerVariants}
				className="mb-4 grid grid-cols-12 gap-4">
				<BounceCard
					className="col-span-12 md:col-span-4"
					variants={cardVariants}>
					<CardTitle>Design</CardTitle>
					<ServiceContent color="indigo">
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
					</ServiceContent>
				</BounceCard>

				<BounceCard
					className="col-span-12 md:col-span-8"
					variants={cardVariants}>
					<CardTitle>Develop</CardTitle>
					<ServiceContent color="orange">
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
					</ServiceContent>
				</BounceCard>
			</motion.div>

			<motion.div
				variants={staggerVariants}
				className="grid grid-cols-12 gap-4">
				<BounceCard
					className="col-span-12 md:col-span-8"
					variants={cardVariants}>
					<CardTitle>Deploy</CardTitle>
					<ServiceContent color="emerald">
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
					</ServiceContent>
				</BounceCard>

				<BounceCard
					className="col-span-12 md:col-span-4"
					variants={cardVariants}>
					<CardTitle>Support</CardTitle>
					<ServiceContent color="red">
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-red-50">
								Monitoring & Care 🩺
							</span>
							<span className="block text-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-red-50">
								Regular Updates, Security, and Optimization ⚙️
							</span>
						</div>
					</ServiceContent>
				</BounceCard>
			</motion.div>
		</motion.section>
	);
};

const BounceCard = ({ className, children, variants }) => {
	return (
		<motion.div
			variants={variants}
			whileHover={{ scale: 0.95, rotate: "-1deg" }}
			whileTap={{ scale: 0.9 }}
			className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}>
			{children}
		</motion.div>
	);
};

const ServiceContent = ({ color, children }) => {
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.4 }}
			// className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] from-${color}-400 to-${color}-500`}
		>
			{children}
		</motion.div>
	);
};

const CardTitle = ({ children }) => {
	return (
		<motion.h3
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
			className="mx-auto text-center text-3xl font-semibold">
			{children}
		</motion.h3>
	);
};
