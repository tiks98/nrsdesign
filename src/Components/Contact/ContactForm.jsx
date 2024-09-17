import React, { useState } from "react";

export function ContactForm() {
	// State to store form data
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		company: "",
		email: "",
		subject: "",
		message: "",
	});

	// Function to handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const resetForm = () => {
		setFormData({
			firstName: "",
			lastName: "",
			company: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", JSON.stringify(formData, null, 2)); // Display form data as JSON in console
		alert("Form has been submitted successfully");
		resetForm();
	};

	return (
		<div className="bg-white lg:mb-48 sm:mb-24">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="mb-10 md:mb-16">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						Get in touch
					</h2>
					<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
						Thank you for reaching out to NRS Design! We value your inquiry and
						will get back to you as soon as possible. Whether it's about our
						services, collaboration, or any questions you may have, we're here
						to help and ensure a prompt response.
					</p>
				</div>

				{/* form - start */}
				<form
					onSubmit={handleSubmit}
					className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
					<div>
						<label
							htmlFor="firstName"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
							First name*
						</label>
						<input
							name="firstName"
							required
							placeholder="First Name"
							value={formData.firstName}
							onChange={handleInputChange}
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					<div>
						<label
							htmlFor="lastName"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
							Last name*
						</label>
						<input
							name="lastName"
							required
							placeholder="Last Name"
							value={formData.lastName}
							onChange={handleInputChange}
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="company"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
							Company
						</label>
						<input
							name="company"
							placeholder="Company Name"
							value={formData.company}
							onChange={handleInputChange}
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
							Email*
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16">
									<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
									<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
								</svg>
							</div>

							<input
								name="email"
								required
								type="email"
								value={formData.email}
								onChange={handleInputChange}
								placeholder="example@email.com"
								className="w-full rounded border bg-gray-50 px-3 ps-10 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="subject"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
							Subject*
						</label>
						<input
							name="subject"
							required
							placeholder="Subject"
							value={formData.subject}
							onChange={handleInputChange}
							className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
						/>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
							Message*
						</label>
						<textarea
							name="message"
							required
							placeholder="Please write your message here..."
							value={formData.message}
							onChange={handleInputChange}
							className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
					</div>

					<div className="flex items-center justify-between sm:col-span-2">
						<button
							type="submit"
							className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
							Send
						</button>

						<span className="text-sm text-gray-500">*Required</span>
					</div>

					<p className="text-xs text-gray-400">
						By signing up to our newsletter you agree to our{" "}
						<a
							href="/nrsdesign"
							className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">
							Privacy Policy
						</a>
						.
					</p>
				</form>
				{/* form - end */}
			</div>
		</div>
	);
}
