import Link from "next/link";
import styles from "./banner.module.scss";
import React, { useEffect, useState } from "react";
import slogans from "@/helpers/slogans";

const Banner = () => {
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
