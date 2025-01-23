import { useEffect, useState } from "react";

const useHouses = () => {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		const getHouses = async () => {
			const resp = await fetch("/api/houses");
			const data =  await resp.json();
			setHouses(data);
		}
		getHouses();
	}, []);

	return { houses, useHouses, setHouses };
};

export default useHouses;