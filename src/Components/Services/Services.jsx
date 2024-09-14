import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";

export const ServicesPage = () => {
	return (
		<div className="bg-white">
			<TextParallaxContent
				imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Custom"
				heading="Website Designing.">
				<WebsiteDesigningText />
			</TextParallaxContent>
			<TextParallaxContent
				imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Quality"
				heading="Never compromise.">
				<QualityText />
			</TextParallaxContent>
			<TextParallaxContent
				imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Support"
				heading="Maintenance and Optimization.">
				<SupportText />
			</TextParallaxContent>
		</div>
	);
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
	return (
		<div
			style={{
				paddingLeft: IMG_PADDING,
				paddingRight: IMG_PADDING,
			}}>
			<div className="relative h-[150vh]">
				<StickyImage imgUrl={imgUrl} />
				<OverlayCopy
					heading={heading}
					subheading={subheading}
				/>
			</div>
			{children}
		</div>
	);
};

const StickyImage = ({ imgUrl }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<motion.div
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: `calc(100vh - ${IMG_PADDING * 2}px)`,
				top: IMG_PADDING,
				scale,
			}}
			ref={targetRef}
			className="sticky z-0 overflow-hidden rounded-3xl">
			<motion.div
				className="absolute inset-0 bg-neutral-950/70"
				style={{
					opacity,
				}}
			/>
		</motion.div>
	);
};

const OverlayCopy = ({ subheading, heading }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

	return (
		<motion.div
			style={{
				y,
				opacity,
			}}
			ref={targetRef}
			className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white">
			<p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
				{subheading}
			</p>
			<p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
		</motion.div>
	);
};

const SupportText = () => (
	<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
		<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
			Website Maintenance and Support
		</h2>
		<div className="col-span-1 md:col-span-8">
			<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
				Your website is an ongoing investment, and our dedicated team ensures it
				remains updated, secure, and running smoothly. We offer comprehensive
				maintenance packages to keep your site optimized and performing at its
				best, so you can focus on what matters—your business.
			</p>
			{/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				reiciendis blanditiis aliquam aut fugit sint.
			</p> */}
			{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
				Learn more <FiArrowUpRight className="inline" />
			</button> */}
		</div>
		<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
			Website Optimization and Performance
		</h2>
		<div className="col-span-1 md:col-span-8">
			<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
				To keep your website fast and user-friendly, we regularly optimize your
				site’s performance. This not only improves user experience but also
				boosts your SEO, making sure your site stays competitive.
			</p>
			{/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				reiciendis blanditiis aliquam aut fugit sint.
			</p> */}
			{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
				Learn more <FiArrowUpRight className="inline" />
			</button> */}
		</div>
	</div>
);

const WebsiteDesigningText = () => (
	<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
		<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
			Custom Website Designing
		</h2>
		<div className="col-span-1 md:col-span-8">
			<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
				Your website is the face of your business, and we ensure it’s a true
				reflection of your brand. Our team crafts unique, visually appealing
				designs tailored to your specific needs. Whether it’s a sleek minimalist
				portfolio or a dynamic and interactive business site, we prioritize
				functionality, aesthetics, and user experience in every design.
			</p>
			{/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				reiciendis blanditiis aliquam aut fugit sint.
			</p> */}
			{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
				Learn more <FiArrowUpRight className="inline" />
			</button> */}
		</div>
		<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
			Responsive and Mobile-Optimized Websites
		</h2>
		<div className="col-span-1 md:col-span-8">
			<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
				Your website will look great on every device. We ensure a seamless
				experience for your visitors, whether they’re browsing on a smartphone,
				tablet, or desktop, so you never miss an opportunity to engage with your
				audience.
			</p>
			{/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				reiciendis blanditiis aliquam aut fugit sint.
			</p> */}
			{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
				Learn more <FiArrowUpRight className="inline" />
			</button> */}
		</div>
		<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
			eCommerce Solutions
		</h2>
		<div className="col-span-1 md:col-span-8">
			<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
				Selling online has never been easier with our custom eCommerce
				platforms. We integrate secure, scalable, and user-friendly solutions,
				helping you maximize your online sales potential while offering your
				customers a hassle-free shopping experience.
			</p>
			{/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				reiciendis blanditiis aliquam aut fugit sint.
			</p> */}
			{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
				Learn more <FiArrowUpRight className="inline" />
			</button> */}
		</div>
	</div>
);

const QualityText = () => (
	<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
		<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
			SEO Optimization
		</h2>
		<div className="col-span-1 md:col-span-8">
			<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
				A great website needs to be discoverable. Our SEO optimization services
				ensure that your website ranks higher in search engines, driving organic
				traffic and increasing visibility in your target market.
			</p>
			{/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				reiciendis blanditiis aliquam aut fugit sint.
			</p> */}
			{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
				Learn more <FiArrowUpRight className="inline" />
			</button> */}
		</div>
		<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
			Brand Development
		</h2>
		<div className="col-span-1 md:col-span-8">
			<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
				Your brand is your identity, and we help you craft a compelling,
				cohesive brand that resonates with your audience. Whether starting fresh
				or refreshing an existing brand, we ensure your visuals, messaging, and
				identity are consistent across all platforms.
			</p>
			{/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				reiciendis blanditiis aliquam aut fugit sint.
			</p> */}
			{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
				Learn more <FiArrowUpRight className="inline" />
			</button> */}
		</div>
	</div>
);
