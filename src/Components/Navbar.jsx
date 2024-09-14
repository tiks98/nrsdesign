import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
	return (
		<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
					<a
						href="/"
						className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
						aria-label="logo">
						<svg
							width="95"
							height="94"
							viewBox="0 0 95 94"
							className="h-auto w-6 text-indigo-500"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M96 0V47L48 94H0V47L48 0H96Z" />
						</svg>
						NRS Design
					</a>

					<nav className="hidden gap-12 lg:flex">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "text-lg font-semibold text-indigo-500 relative group"
									: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group"
							}>
							Home
							<span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
							<span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
						</NavLink>
						<NavLink
							to="/services"
							className={({ isActive }) =>
								isActive
									? "text-lg font-semibold text-indigo-500 relative group"
									: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group"
							}>
							Services
							<span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
							<span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive
									? "text-lg font-semibold text-indigo-500 relative group"
									: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group"
							}>
							About
							<span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
							<span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
						</NavLink>
					</nav>

					<a
						href="/contact"
						className="relative inline-block overflow-hidden font-semibold bg-gray-200 px-8 py-3 text-center text-sm text-gray-500 rounded-lg outline-none ring-indigo-300 transition-all duration-500 group hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
						<span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
						<span class="relative w-full text-left text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white">
							Contact Sales
						</span>
					</a>

					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						</svg>
						Menu
					</button>
				</header>
			</div>
		</div>
	);
}
