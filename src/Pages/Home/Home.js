import React from "react";
import Nav from "../../components/Nav/Nav";
import AboutSec from "../../Sections/AboutSec/AboutSec";
import HeroSec from "../../Sections/HeroSec/HeroSec";
import ProjectsSec from "../../Sections/ProjectsSec/ProjectsSec";

const Home = () => {
	return (
		<>
			<Nav />
			<HeroSec />
			<AboutSec />
			<ProjectsSec />
		</>
	);
};

export default Home;
