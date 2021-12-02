import React from "react";
import { Link } from "react-router-dom";

const ContactSec = () => {
	return (
		<>
			<div className="py-20 bg-gray-900">
				<div className="container px-3 md:px:8 lg:px-8 mx-auto">
					<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
						<h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
							If you have any questions, feel free to contact me
						</h1>
						<Link to="/contact" className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
							Contact me
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactSec;
