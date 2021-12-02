import React from "react";

const Footer = () => {
	return (
		<>
			<div className="py-10">
				<div className="container px-3 md:px:8 lg:px-8 mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div>
							<p className="capitalize">
								&copy; {Date().slice(11, 15)} all right reserved by{" "}
								<a href="https://sohan.pro" className=" text-purple-600">
									Sohan
								</a>
							</p>
						</div>
						<div>
							<span className="mx-2">
								<a
									href="https://www.facebook.com/mi.sohan.0216"
									target="_blank"
									rel="noreferrer"
								>
									<i className="text-2xl text-purple-600 fab fa-facebook"></i>
								</a>
							</span>
							<span className="mx-2">
								<a
									href="https://github.com/coders-sohan"
									target="_blank"
									rel="noreferrer"
								>
									<i className="text-2xl text-purple-600 fab fa-github"></i>
								</a>
							</span>
							<span className="mx-2">
								<a
									href="https://www.linkedin.com/in/mofizulislam"
									target="_blank"
									rel="noreferrer"
								>
									<i className="text-2xl text-purple-600 fab fa-linkedin"></i>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
