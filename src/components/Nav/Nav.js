import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<div className="border-b bg-white">
				<div className="container px-3 md:px:8 lg:px-8 py-3 mx-auto">
					<div className="relative flex items-center justify-between">
						<NavLink
							to="/"
							aria-label="Md. Mofizul Islam"
							title="Md. Mofizul Islam"
							className="inline-flex items-center"
						>
							<span>
								<img src={logo} className="h-8 -mt-1" alt="logo" />
							</span>
							<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
								MI
							</span>
						</NavLink>
						<ul className="flex items-center hidden gap-10 lg:flex">
							<li>
								<NavLink
									to="/home"
									activeClassName="text-gray-900"
									aria-label="Home"
									title="Home"
									className="font-medium tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									Home
								</NavLink>
							</li>
							{/* <li>
								<NavLink
									to="/projects"
									activeClassName="text-gray-900"
									aria-label="Projects"
									title="Projects"
									className="font-medium tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									Projects
								</NavLink>
							</li> */}
							<li>
								<NavLink
									to="/contact"
									activeClassName="text-gray-900"
									aria-label="Contact"
									title="Contact"
									className="font-medium tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									Contact
								</NavLink>
							</li>
						</ul>
						<div className="lg:hidden">
							<button
								aria-label="Open Menu"
								title="Open Menu"
								className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
								onClick={() => setIsMenuOpen(true)}
							>
								<svg
									className="w-5 text-gray-500 hover:text-gray-900"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
									/>
									<path
										fill="currentColor"
										d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
									/>
									<path
										fill="currentColor"
										d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
									/>
								</svg>
							</button>
							{isMenuOpen && (
								<div className="absolute top-0 left-0 w-full">
									<div className="p-5 bg-white border rounded shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<div>
												<NavLink
													to="/"
													aria-label="Mofizul Islam"
													title="Mofizul Islam"
													className="inline-flex items-center"
												>
													<span>
														<img src={logo} className="h-8 -mt-1" alt="logo" />
													</span>
													<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
														MI
													</span>
												</NavLink>
											</div>
											<div>
												<button
													aria-label="Close Menu"
													title="Close Menu"
													className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
													onClick={() => setIsMenuOpen(false)}
												>
													<svg
														className="w-5 text-gray-500 hover:text-gray-900"
														viewBox="0 0 24 24"
													>
														<path
															fill="currentColor"
															d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
														/>
													</svg>
												</button>
											</div>
										</div>
										<nav className="text-center">
											<ul className="space-y-4">
												<li className="py-2">
													<NavLink
														to="/home"
														activeClassName="text-gray-900"
														aria-label="Home"
														title="Home"
														className="font-medium tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
													>
														Home
													</NavLink>
												</li>
												{/* <li className="py-2">
													<NavLink
														to="/projects"
														activeClassName="text-gray-900"
														aria-label="Projects"
														title="Projects"
														className="font-medium tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
													>
														Projects
													</NavLink>
												</li> */}
												<li className="py-2">
													<NavLink
														to="/contact"
														activeClassName="text-gray-900"
														aria-label="Contact"
														title="Contact"
														className="font-medium tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
													>
														Contact
													</NavLink>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
