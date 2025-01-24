import React from "react";
import styles from "./loadal.module.scss";

const Loadal = ({ loadalState }) => {
	return <div className="text-center"><h4 className={`${styles.loadal_text} p-4`} >{loadalState}</h4></div>;
};

export default Loadal;