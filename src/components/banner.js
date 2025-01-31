import Link from "next/link";
import styles from "./banner.module.scss";
import React, { useContext, useEffect, useState } from "react";
import slogans from "@/helpers/slogans";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const Banner = () => {
const { navigate } = useContext(navigationContext);

	const [randomSlogan, setRandomSlogan] = useState('');

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * slogans.length);
		setRandomSlogan(slogans[randomIndex]);
	}, []);

	return (
	
		<header className={`row mt-3 mb-4 ${styles.contain}`}>
			
			<div className="col-3">
				<Link href="/">
					<img
						src="/logo.svg"
						alt="TERRANOVA logo"
						className="img-logo"
						onClick={() => navigate(navValues.home)}
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
