import Link from "next/link";
import styles from "./banner.module.scss";
import React, { useEffect, useState } from "react";

const Banner = () => {
	const slogans = [
		'Your next dream home, anywhere in the world!',
		'Your dream home, anywhere in the world.',
		'Global homes, local dreams – find yours today!',
		'Connecting you to homes across the globe.',
		'Discover your perfect place, anywhere on earth',
		'Find your perfect match, house by house.',
		'A home for every heart and every dream.',
		'Where luxury meets location.',
		'Start your new chapter today!',
	];

	const [randomSlogan, setRandomSlogan] = useState('');

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * slogans.length);
		setRandomSlogan(slogans[randomIndex]);
	}, []);

	return (
		<header className={`row mb-4 mt-3 ${styles.contain}`}>
			<div className="col-3">
				<Link href="/">
					<img
						src="/logo.png"
						alt="TERRANOVA logo"
						className="img-logo"
					/>
				</Link>
			</div>
			<div className={`${styles.subtitle} theme-text-color col-9 d-flex align-items-center`}>
				<h4 className="align-middle">{randomSlogan}</h4>
			</div>
		</header>
	);
};

export default Banner;
