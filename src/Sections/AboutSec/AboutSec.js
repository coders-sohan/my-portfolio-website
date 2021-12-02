import React from "react";

const AboutSec = () => {
	return (
		<>
			<div className="bg-gray-700 py-20">
				<div className="container px-3 md:px:8 lg:px-8 py-10 mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-20 gap-6">
						<div className="py-5">
							<h1 className="text-white text-xl md:text-2xl lg:text-4xl font-semibold">
								About me
							</h1>
							<p className="text-white mt-5 text-base md:text-lg lg:text-lg text-justify">
								Hello, My name is Mofizul Islam (Sohan). I'm a web designer and
								front end developer. My job is to build your website so that it
								is functional and user-friendly but at the same time attractive.
								<br />
								<br />
								I have a strong passion for the creativity and discipline that
								goes into front-end development. Keeping in mind scalability and
								clean code that is maintainable and readable.
								<br />
								<br />
								I’ve worked with companies of all shapes and sizes, so contact
								me if you’d like to work together on your next project. In my
								free time, I enjoy being outdoors, listening to music, traveling
								and experiencing new and exciting adventures.
							</p>
						</div>
						<div className="py-5">
							<h1 className="text-white text-xl md:text-2xl lg:text-4xl font-semibold">
								Skills
							</h1>
							<div className="mt-5">
								<div className="text-center text-purple">
									<div className="pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
										<span className="px-4 py-2 bg-white mx-2 rounded">
											HTML
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">CSS</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											JavaScript
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											React JS
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Tailwind CSS
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											SCSS
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Bootstrap
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Material UI
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											React Router
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Node JS
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Firebase
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											MongoDB
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Express JS
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Heroku
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Figma
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Adobe XD
										</span>
									</div>
									<div className="pt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
										<span className="px-4 py-2 bg-white mx-2 rounded">
											Chrome Dev Tools
										</span>
										<span className="px-4 py-2 bg-white mx-2 rounded">
											React Dev Tools
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSec;
