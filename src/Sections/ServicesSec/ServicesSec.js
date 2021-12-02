import React from "react";
import developer from "../../img/developer.svg";
import design from "../../img/webdesign.svg";
import responsive from "../../img/responsive.svg";

const ServicesSec = () => {
	return (
		<>
			<div className="py-10">
				<div className="container px-3 md:px:8 lg:px-8 mx-auto pb-10">
					<div className="text-center mb-12">
						<h1 className="lg:text-5xl md:text-4xl text-3xl underline font-semibold">
							Services
						</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="p-5 shadow-md border rounded-md">
							<div className="">
								<img className="" src={developer} alt="developer" />
							</div>
							<h1 className="text-2xl my-5 font-semibold">WEB DEVELOPMENT</h1>
							<p className="text-sm text-justify">
								Web development is the creation and maintenance of a website;
								This is something that happens behind the scenes to make a
								website look great, work fast and perform well with a seamless
								user experience.
							</p>
						</div>
						<div className="p-5 shadow-md border rounded-md">
							<div className="">
								<img className="" src={design} alt="design" />
							</div>
							<h1 className="text-2xl my-5 font-semibold">WEB DESIGN</h1>
							<p className="text-sm text-justify">
								In today's digital world, your website is the first customer
								interaction with your business. This is why about 95 percent of
								a user's first impressions are related to web design
							</p>
						</div>
						<div className="p-5 shadow-md border rounded-md">
							<div className="">
								<img className="" src={responsive} alt="responsive" />
							</div>
							<h1 className="text-2xl my-5 font-semibold">RESPONSIVE DESIGN</h1>
							<p className="text-sm text-justify">
								Responsive web design is a method that suggests that design and
								development should respond to user behavior and environment
								based on screen size, platform and orientation. The exercise
								consists of a combination of flexible grids and layouts, media
								questions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesSec;
