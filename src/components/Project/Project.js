import React from "react";

const Project = (props) => {
	const { name, img, category, desc, liveLink, clientLink, serverLink } =
		props.project;

	return (
		<>
			<div className="p-4 w-full md:w-1/2 lg:w-1/3">
				<div className="h-full border border-indigo-500 border-opacity-60 rounded-lg overflow-hidden">
					<img
						className="lg:h-72 md:h-36 w-full object-cover object-center"
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
						<p className="leading-relaxed mb-3">{desc}</p>
					</div>
					<div className="px-6 pb-6 mt-10 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center text-center">
						<a
							href={liveLink}
							className="px-4 text-sm py-2 my-2 lg:my-0 rounded transition bg-indigo-600 text-white"
							target="_blank"
							rel="noreferrer"
						>
							Live site
						</a>
						<a
							href={clientLink}
							className="px-4 text-sm py-2 my-2 lg:my-0 rounded transition bg-indigo-600 text-white"
							target="_blank"
							rel="noreferrer"
						>
							Client side
						</a>
						<a
							href={serverLink}
							className="px-4 text-sm py-2 my-2 lg:my-0 rounded transition bg-indigo-600 text-white"
							target="_blank"
							rel="noreferrer"
						>
							server side
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
