import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_cylcyg7",
				"template_lfbjpzi",
				e.target,
				"user_IyLLJKSKgcRPExTUhyCQe"
			)
			.then(
				(result) => {
					swal("Good job!", "Email sent", "success");
				},
				(error) => {
					swal("Opp's!", "Something is wrong", "error");
				}
			);
		e.target.reset();
	}

	return (
		<>
			<Nav />
			<div
				className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280')`,
				}}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
					<div className="lg:w-3/6 lg:pr-0 pr-0">
						<h1 className="font-medium text-5xl text-white">
							<span>Have some question?</span>
						</h1>
						<p className="leading-relaxed mt-4 text-white">
							If you have any question, I'd love to hear from you. I will get in
							touch you shortly.
						</p>
						<div className="flex items-center mt-6">
							<div className="mr-4 mt-1">
								<i className="text-white text-3xl far fa-check-circle"></i>
							</div>
							<div className="bg-gray-50 py-1 px-3 rounded-md w-2/3">
								<h1 className="text-xl text-gray-900">
									<span className="mr-5">Email :</span>
									<a
										className="text-purple-600"
										href="mailto:mofizulislam0216@gmail.com"
									>
										mofizulislam0216@gmail.com
									</a>
								</h1>
							</div>
						</div>
						<div className="flex items-center mt-6">
							<div className="mr-4 mt-1">
								<i className="text-white text-3xl far fa-check-circle"></i>
							</div>
							<div className="bg-gray-50 py-1 px-3 rounded-md w-72">
								<h1 className="text-xl text-gray-900">
									<span className="mr-5">Phone :</span>
									<a className="text-purple-600" href="tel:+8801909292140">
										+8801909292140
									</a>
								</h1>
							</div>
						</div>
					</div>
					<div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
						<form onSubmit={sendEmail}>
							<div className="relative mb-4">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-600"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-white rounded-md border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-600"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-white rounded-md border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="subject"
									className="leading-7 text-sm text-gray-600"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									className="w-full bg-white rounded-md border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-600"
								>
									Your message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									className="w-full bg-white rounded-md border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
								></textarea>
							</div>
							<input
								type="submit"
								value="send message"
								className="text-white bg-purple-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 text-lg capitalize cursor-pointer"
							/>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
