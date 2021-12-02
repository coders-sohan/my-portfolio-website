import React, { useEffect, useState } from "react";
import Project from "../../components/Project/Project";

const ProjectsSec = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch("./data.JSON")
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<>
			<div className="py-10">
				<div className="container px-3 md:px:8 lg:px-8 py-10 mx-auto">
					<div className="text-center mb-10">
						<h1 className="lg:text-5xl md:text-4xl text-3xl underline font-semibold">My Projects</h1>
					</div>
					<div className="flex flex-wrap -m-4">
						{projects.map((project) => (
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectsSec;
