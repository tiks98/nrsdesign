import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Design = () => (
	<div class="bg-white py-6 sm:py-8 lg:py-12">
		<div class="mx-auto max-w-screen-2xl pl-0 pr-8 ">
			<section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
				<div className="h-auto overflow-hidden rounded-lg lg:h-auto xl:w-8/12 transform transition duration-300 hover:scale-110">
					<DotLottieReact
						src="https://lottie.host/c9e2ebee-a7c7-4114-afdb-9c8c73504905/aZhgoKTef5.lottie"
						loop
						autoplay
					/>
				</div>
				<div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-7/12 xl:py-24">
					<h1 className="mb-8 text-3xl font-bold text-black sm:text-5xl md:mb-12 md:text-5xl">
						Elevate Your Digital Experience with Stunning Design
					</h1>

					<p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
						At NRS Design, we craft user-centric designs that captivate and
						engage. Our approach blends sleek, intuitive interfaces with
						stunning visuals, ensuring a seamless and aesthetically pleasing
						experience. Every pixel is thoughtfully placed to enhance usability
						and leave a lasting impression. Let’s bring your vision to life with
						designs that are not only beautiful but also functional.
					</p>
				</div>
			</section>
		</div>
	</div>
);

export const Develop = () => (
	<div class="bg-white py-6 sm:py-8 lg:py-12">
		<div class="mx-auto max-w-screen-2xl pl-8 pr-0">
			<section className="flex flex-col justify-around gap-2 sm:gap-5 md:gap-8 lg:flex-row">
				<div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24 xl:ps-24">
					<h1 className="mb-8 text-3xl font-bold text-black sm:text-5xl md:mb-12 md:text-5xl">
						Build for the Future with Expert Development
					</h1>

					<p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
						At NRS Design, we create seamless, responsive websites that adapt
						flawlessly to any device. Our scalable web development ensures your
						platform grows with your business, delivering unmatched flexibility.
						With a focus on speed, security, and performance, we build websites
						that are fast, reliable, and ready to handle any challenge. Let’s
						develop something exceptional—where innovation meets efficiency.
					</p>
				</div>
				<div className="h-auto overflow-hidden rounded-lg lg:h-auto xl:w-6/12 transform transition duration-300 hover:scale-110">
					<DotLottieReact
						src="https://lottie.host/1c531ac6-ad21-47c1-a516-25f9497e691f/GajOu0fO0s.lottie"
						loop
						autoplay
					/>
				</div>
			</section>
		</div>
	</div>
);

export const Deploy = () => (
	<div class="bg-white py-6 sm:py-8 lg:py-12">
		<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
			<section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
				<div className="h-auto overflow-hidden rounded-lg lg:h-auto xl:w-8/12 transform transition duration-300 hover:scale-110">
					<DotLottieReact
						src="https://lottie.host/d7e766c1-d22f-4e70-bf18-12423d614224/44HDBLBKE0.lottie"
						loop
						autoplay
					/>
				</div>
				<div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-7/12 xl:py-24">
					<h1 className="mb-8 text-3xl font-bold text-black sm:text-5xl md:mb-12 md:text-5xl">
						Effortless Deployment, Seamless Integration
					</h1>

					<p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
						At NRS Design, we ensure a hassle-free web deployment process, so
						your project goes live smoothly and efficiently. With seamless
						integration, we connect all the pieces to work in perfect harmony.
						From concept to completion, we handle every step effortlessly, so
						you can focus on what matters most—your business. Let’s launch your
						vision with confidence and precision.
					</p>
				</div>
			</section>
		</div>
	</div>
);

export const Support = () => (
	<div class="bg-white py-6 sm:py-8 lg:py-12">
		<div class="mx-auto max-w-screen-2xl pl-8 pr-0">
			<section className="flex flex-col justify-around gap-6 sm:gap-10 md:gap-16 lg:flex-row">
				<div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24 xl:pl-28">
					<h1 className="mb-8 text-3xl font-bold text-black sm:text-5xl md:mb-12 md:text-5xl">
						Ongoing Support for Lasting Success
					</h1>

					<p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
						At NRS Design, our commitment doesn’t end at launch. With continuous
						monitoring & care, we ensure your website runs smoothly at all
						times. Expect regular updates, top-notch security, and ongoing
						optimization to keep your platform fast, secure, and up to date.
						We’ve got your back—so you can focus on growing your business with
						confidence.
					</p>
				</div>
				<div className="h-auto overflow-hidden rounded-lg lg:h-auto xl:w-7/12 transform transition duration-300 hover:scale-110">
					{/* <DotLottieReact
						src="https://lottie.host/876a6b1e-154c-4b10-a91e-6a9bf72a7ce2/RVuG2z5c6S.lottie"
						loop
						autoplay
					/> */}
					<DotLottieReact
						src="https://lottie.host/e25511b9-15c9-49d1-8586-f7810cac19f2/Uv7Dn5OAYD.lottie"
						loop
						autoplay
					/>
				</div>
			</section>
		</div>
	</div>
);
