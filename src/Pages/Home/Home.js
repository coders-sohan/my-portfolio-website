import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import AboutSec from "../../Sections/AboutSec/AboutSec";
import ContactSec from "../../Sections/ContactSec/ContactSec";
import HeroSec from "../../Sections/HeroSec/HeroSec";
import ProjectsSec from "../../Sections/ProjectsSec/ProjectsSec";
import ServicesSec from "../../Sections/ServicesSec/ServicesSec";

const Home = () => {
	return (
		<>
			<Nav />
			<HeroSec />
			<AboutSec />
			<ProjectsSec />
			<ServicesSec />
			<ContactSec />
			<Footer />
		</>
	);
};

export default Home;
