/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideInLeft: {
					"0%": { opacity: 0, transform: "translateX(-100%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				slideInRight: {
					"0%": { opacity: 0, transform: "translateX(100%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				fadeInUp: {
					"0%": { opacity: 0, transform: "translateY(50px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				fadeInDown: {
					"0%": { opacity: 0, transform: "translateY(-50px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				slideInLeft: "slideInLeft 2s ease-out forwards",
				slideInRight: "slideInRight 2s ease-out forwards",
				fadeInUp: "fadeInUp 2s ease-out forwards",
				fadeInDown: "fadeInDown 2s ease-out forwards",
			},
		},
	},
	plugins: [],
};
