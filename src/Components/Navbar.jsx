import React, { useState, useContext } from "react"; // Added useContext
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext

export function Navbar() {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="bg-white pb-6 sm:pb- 8 lg:pb- 12 dark:bg-gray-800"> {/* Added dark mode background for navbar container */}
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<header className="mb-8 flex items-center justify-between py- 4 md:mb- 8 md:py- 8 xl:mb- 12">
					<a
						href="/nrsdesign"
						className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl transform transition duration-300 hover:scale-110 dark:text-white" // Added dark mode text for logo
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
							to="/nrsdesign/home"
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
									? "text-lg font-semibold text-indigo-500 relative group dark:text-indigo-400" // Dark mode for active link
									: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group dark:text-gray-300 dark:hover:text-indigo-400" // Dark mode for inactive link
							}>
							About
							<span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
							<span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
						</NavLink>
					</nav>

					{/* Desktop buttons container */}
					<div className="flex items-center">
						<NavLink to="/nrsdesign/contact" className="hidden lg:inline-block">
							<a
								href="/nrsdesign/contact" // This href is redundant due to NavLink but kept for original structure
								className="relative inline-block overflow-hidden font-semibold bg-gray-200 px-8 py-3 text-center text-sm text-gray-500 rounded-lg outline-none ring-indigo-300 transition-all duration-500 group hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus-visible:ring-indigo-500">
								<span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
								<span className="relative w-full text-left text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white dark:text-gray-300 dark:group-hover:text-white">
									Contact Sales
								</span>
							</a>
						</NavLink>

						{/* Desktop Theme Toggle Button */}
						<button
							type="button"
							aria-label="Toggle theme"
							onClick={toggleTheme}
							className="ml-4 p-2 rounded-lg ring-indigo-300 focus-visible:ring outline-none transition-colors duration-300 ease-in-out dark:text-yellow-400 text-indigo-600 hover:bg-gray-200 dark:hover:bg-gray-700 hidden lg:inline-flex items-center">
							{theme === "light" ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
							)}
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						onClick={toggleDropdown}
						className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus-visible:ring-indigo-500">
						{/* Mobile menu icon also needs dark mode considerations for its own color if needed */}
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
						<nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md rounded-lg z-10 dark:bg-gray-800"> {/* Dark mode for dropdown nav */}
							<ul className="flex flex-col items-center gap-4 p-4">
								<NavLink
									to="/nrsdesign"
									onClick={toggleDropdown} 
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative dark:text-indigo-400"
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
									}>
									Home
								</NavLink>
								<NavLink
									to="/nrsdesign/services"
									onClick={toggleDropdown}
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative dark:text-indigo-400"
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
									}>
									Services
								</NavLink>
								<NavLink
									to="/nrsdesign/about"
									onClick={toggleDropdown}
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative dark:text-indigo-400"
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
									}>
									About
								</NavLink>
								<NavLink
									to="/nrsdesign/contact"
									onClick={toggleDropdown}
									className={({ isActive }) =>
										isActive
											? "text-lg font-semibold text-indigo-500 relative dark:text-indigo-400" // This NavLink is for the main contact page button in mobile, not sales
											: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
									}>
									Contact
								</NavLink>
								{/* Mobile Theme Toggle Button */}
								<li className="w-full">
									<button
										type="button"
										onClick={() => {
											toggleTheme();
											toggleDropdown();
										}}
										className="w-full flex items-center text-left px-4 py-2 text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400">
										{theme === 'light' ? (
											<div className="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
												Switch to Dark Theme
											</div>
										) : (
											<div className="flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
												Switch to Light Theme
											</div>
										)}
									</button>
								</li>
							</ul>
						</nav>
					)}
				</header>
				{/* Apply dark mode styling to other NavLinks and elements as needed */}
				{/* Example for Home NavLink */}
				{/* <NavLink
					to="/nrsdesign/home"
					className={({ isActive }) =>
						isActive
							? "text-lg font-semibold text-indigo-500 relative group dark:text-indigo-400"
							: "text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 relative group dark:text-gray-300 dark:hover:text-indigo-400"
					}>
					Home ...
				</NavLink> */}
				{/* Similar updates for Services, About, Contact NavLinks */}
			</div>
		</div>
	);
}
