import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
	const [houses, setHouses] = useState([]);
	const { get, loadalState } = useGetRequest('/api/houses');

	useEffect(() => {
		const getHouses = async () => {
			const houses = await get();
			setHouses(houses);
		}
		getHouses();
	}, []);

	return { houses, useHouses, setHouses, loadalState};
};

export default useHouses;