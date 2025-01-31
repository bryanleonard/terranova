import React from "react";
import styles from "./loadal.module.scss";

const Loadal = ({ loadalState }) => {
	return <div className="loadal text-center my-3"><h4 className={`${styles.loadal_text} py-3 px-4`} >{loadalState}</h4></div>;
};

export default Loadal;