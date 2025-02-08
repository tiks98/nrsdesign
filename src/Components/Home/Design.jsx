import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Design = () => (
	<div class="bg-white py-6 sm:py-8 lg:py-12">
		<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
			<section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
				<div className="h-48 overflow-hidden rounded-lg lg:h-auto xl:w-8/12">
					<DotLottieReact
						src="https://lottie.host/c9e2ebee-a7c7-4114-afdb-9c8c73504905/aZhgoKTef5.lottie"
						loop
						autoplay
					/>
				</div>
				<div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
					<h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
						Desiging the way you like it!
					</h1>

					<p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
						Your website is the face of your business, and we ensure it’s a true
						reflection of your brand. Our team crafts unique, visually appealing
						designs tailored to your specific needs. Whether it’s a sleek
						minimalist portfolio or a dynamic and interactive business site, we
						prioritize functionality, aesthetics, and user experience in every
						design.
					</p>
				</div>
			</section>
		</div>
	</div>
);

// export default Design;
