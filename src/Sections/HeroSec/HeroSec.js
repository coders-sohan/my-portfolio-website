import React from "react";
import Me from "../../img/my-photo.jpeg";
import "./HeroSec.css";

const HeroSec = () => {
	return (
		<>
			<div className="bg-gray-50">
				<div className="container px-3 md:px:8 lg:px-8 py-24 mx-auto">
					<div className="flex flex-col lg:flex-row justify-between items-center lg:gap-28 gap-5">
						<div>
							<div className="py-5">
								<h2 className="lg:text-4xl md:text-3xl text-xl">
									Hello, My name is{" "}
								</h2>
								<h1 className="lg:text-5xl md:text-4xl text-2xl my-6 font-semibold">
									Mofizul Islam (Sohan)
								</h1>
								<p className="lg:text-xl md:text-lg text-base mb-5">
									I am{" "}
									<span className="text-purple font-semibold">
										Web Designer
									</span>{" "}
									and{" "}
									<span className="text-purple font-semibold">
										Front-end Web Developer
									</span>
								</p>
								<p className="lg:text-lg md:text-base text-base text text-gray-600 text-light">
									I design and develop services for customer of all size,
									specializing in creating stylish, modern website, seb services
									and online stores.
								</p>
								<div className="mt-10">
									<a
										href="https://drive.google.com/u/0/uc?id=1HOZtD3yDqL22DAEGAhf5XHpJgz5BDiUP&export=download"
										className="px-4 py-2 bg-indigo-600 text-white transition ease-linear hover:bg-indigo-700 rounded"
									>
										Get Resume
									</a>
								</div>
							</div>
						</div>
						<img src={Me} className="rounded hero-img" alt="myPhoto" />
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSec;
