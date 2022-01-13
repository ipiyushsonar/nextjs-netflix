import Head from "next/head";
import CSS from "csstype";

const heroStyle: CSS.Properties = {
	backgroundImage:
		"linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(./hero-bg.jpg)",
};

export default function Home() {
	return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"
    style={heroStyle}>
			<Head>
				<title>Netflix Clone</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
				<h1 className="max-w-lg text-5xl font-bold text-white">
					Unlimited movies, TV shows and more.
				</h1>
				<h2 className="mt-4 mb-8 text-2xl text-white ">
					Watch anywhere. Cancel anytime.
				</h2>
				<p className="text-lg text-white">
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className="flex mt-4">
					<input
						placeholder="Email address"
						className="p-4 bg-white min-w-[400px]"
					/>
					<button className="flex items-center px-8 text-xl text-white bg-[#e50914]">
						Get Started
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</main>
		</div>
	);
}
