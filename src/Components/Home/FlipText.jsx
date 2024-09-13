import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
	return (
		<section className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
			<FlipLink href="#">Where</FlipLink>
			<FlipLink href="#">Innovation</FlipLink>
			<FlipLink href="#">Meets</FlipLink>
			<FlipLink href="#">Creativity</FlipLink>
		</section>
	);
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
	return (
		<motion.a
			initial="initial"
			whileHover="hovered"
			href={href}
			className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl"
			style={{
				lineHeight: 0.75,
			}}>
			<div>
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}>
						{l}
					</motion.span>
				))}
			</div>
			<div className="absolute inset-0">
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}>
						{l}
					</motion.span>
				))}
			</div>
		</motion.a>
	);
};
