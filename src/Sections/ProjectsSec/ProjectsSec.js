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
				<div className="container px-1 md:px:8 lg:px-8 py-10 mx-auto">
					<div>
						<h1>hi</h1>
					</div>
					<div className="flex flex-wrap">
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
