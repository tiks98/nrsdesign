import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useInView } from "react-intersection-observer";

export const AISolutions = () => {
    const [imageRef, imageInView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const [textRef, textInView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                    <div
                        ref={imageRef}
                        className={`h-auto overflow-hidden rounded-lg lg:h-auto xl:w-8/12 transform hover:scale-110 ${imageInView ? "animate-slideInLeft" : "opacity-0"
                            }`}>
                        {/* Unique AI Lottie should be placed here. Using Design Lottie as placeholder for now. */}
                        <DotLottieReact
                            src="https://lottie.host/c84e63d6-e120-4b10-aec8-b1561f79e373/36hL3SGUrn.lottie"
                            loop
                            autoplay
                        />
                    </div>
                    <div
                        ref={textRef}
                        className={`flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-7/12 xl:py-24 ${textInView ? "animate-slideInRight" : "opacity-0"
                            }`}>
                        <h1 className="mb-8 text-3xl font-bold text-black sm:text-5xl md:mb-12 md:text-5xl">
                            Future-Ready with AI Driven Solutions
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                            Unlock the power of Artificial Intelligence to transform your business.
                            From intelligent automation to data-driven insights, we provide
                            cutting-edge AI solutions tailored to your needs.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black">Intelligent Automation</h3>
                                    <p className="text-gray-500">Streamline workflows and reduce manual tasks.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-black">Data-Driven Insights</h3>
                                    <p className="text-gray-500">Make smarter decisions with predictive analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
