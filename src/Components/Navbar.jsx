import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<header className="mb-8 flex items-center justify-between py-4 md:mb-8 md:py-8 xl:mb-12">
					<a
						href="/nrsdesign"
						className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
						aria-label="logo">
						<img
							src={process.env.PUBLIC_URL + "/images/LogoBG.png"}
							alt="logo"
							height={150}
							width={150}
						/>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden gap-12 lg:flex">
						<NavLink
							to="/nrsdesign"
							className={({ isActive }) =>
								isActive
									? "text-lg font-semibold text-indigo-500 relative group"
									: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group"
							}>
							Home
							<span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
							<span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
						</NavLink>
						<NavLink
							to="/nrsdesign/services"
							className={({ isActive }) =>
								isActive
									? "text-lg font-semibold text-indigo-500 relative group"
									: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group"
							}>
							Services
							<span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
							<span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
						</NavLink>
						<NavLink
							to="/nrsdesign/about"
							className={({ isActive }) =>
								isActive
									? "text-lg font-semibold text-indigo-500 relative group"
									: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group"
							}>
							About
							<span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
							<span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
						</NavLink>
					</nav>

					{/* Mobile Menu Button */}
					<button
						type="button"
						onClick={toggleDropdown}
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

					{/* Mobile Dropdown */}
					{isDropdownOpen && (
						<nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md rounded-lg z-10">
							<ul className="flex flex-col items-center gap-4 p-4">
								<NavLink
									to="/nrsdesign"
									onClick={toggleDropdown} // Close dropdown after clicking
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative"
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
									}>
									Home
								</NavLink>
								<NavLink
									to="/nrsdesign/services"
									onClick={toggleDropdown}
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative"
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
									}>
									Services
								</NavLink>
								<NavLink
									to="/nrsdesign/about"
									onClick={toggleDropdown}
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative"
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
									}>
									About
								</NavLink>
								<NavLink
									to="/nrsdesign/contact"
									onClick={toggleDropdown}
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative"
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
									}>
									Contact
								</NavLink>
							</ul>
						</nav>
					)}
				</header>
			</div>
		</div>
	);
}
