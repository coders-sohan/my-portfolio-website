import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
	const { name, img, category, desc, liveLink } =
		props.project;

	return (
		<>
			<div className="p-4 w-full md:w-1/2 lg:w-1/3">
				<div className="h-full shadow-md rounded-lg overflow-hidden">
					<img
						className="lg:h-72 md:h-56 h-48 w-full object-cover object-center"
						src={img}
						alt="blog"
					/>
					<div className="h-72 px-6 pt-6">
						<h2 className="tracking-widest text-xs title-font font-medium text-gray-400">
							{category}
						</h2>
						<h1 className="title-font text-2xl font-medium text-gray-900 my-3">
							{name}
						</h1>
						<p className="leading-relaxed mb-3 text-sm md:text-base">{desc}</p>
					</div>
					<div className="px-6 pb-6 flex flex-col md:flex-row justify-between items-center text-center">
						<a
							href={liveLink}
							className="px-4 text-sm py-2 my-2 lg:my-0 rounded transition bg-indigo-600 text-white"
							target="_blank"
							rel="noreferrer"
						>
							Live site
						</a>
						<Link className="px-4 text-sm py-2 my-2 lg:my-0 rounded transition bg-indigo-600 text-white" to="/">Show details</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
