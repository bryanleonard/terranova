import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  const currYear = new Date().getFullYear();
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="../css/styles.css" />
			</Head>
			<body className="d-flex flex-column min-vh-100">
				<div className="fancy"></div>
				<div className="container pb-3 flex-grow-1">
					<Main />
					<NextScript />
				</div>
				<footer className="footer text-center mt-3">
          &copy; {currYear} Something, something, something Dark Side.</footer>
			</body>
		</Html>
	);
}
