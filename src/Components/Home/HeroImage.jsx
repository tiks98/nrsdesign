import React, { useRef } from "react";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

const HeroImage = ({ src }) => {
	return (
		<div className="h-48 overflow-hidden rounded-lg bg-white-900 lg:h-full lg:w-auto">
			<TiltCard imgSrc={src} />
		</div>
	);
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ imgSrc }) => {
	const ref = useRef(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x);
	const ySpring = useSpring(y);

	const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

	const handleMouseMove = (e) => {
		if (!ref.current) return [0, 0];

		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
		const rY = mouseX / width - HALF_ROTATION_RANGE;

		x.set(rX);
		y.set(rY);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transformStyle: "preserve-3d",
				transform,
			}}
			className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
			<img
				src={imgSrc}
				loading="lazy"
				alt="HeroImg"
				className="h-full w-full object-cover object-center"
				style={{
					transform: "translateZ(75px)",
					transformStyle: "preserve-3d",
				}}
			/>
		</motion.div>
	);
};

export default HeroImage;
