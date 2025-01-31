import loadalStatus from "@/helpers/loadalStatus";
import  { useState, useEffect } from "react";
import useGetRequest from "./useGetRequest";

const useBids = (houseId) => {
	const [bids, setBids] = useState([]);
	const { get, loadalState } = useGetRequest(`/api/bids/${houseId}`);
	const [errorLoadalState, setErrorLoadalState] = useState(loadalStatus.isLoading);

	useEffect(() => {
		const fetchBids = async () => {
			const bids = await get();
			setBids(bids)
		};
		fetchBids()
	}, [get]);

	const postBid = async (bid) => {
		await fetch(`/api/bids/${bid.houseId}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(bid)
		});
	};

	const addBid = async (bid) => {
		// Adding ID for the key value in bids.js
		let maxId = bids.length ? Math.max(...bids.map(b => b.id)) : 9999;
		bid.id = maxId + 1;

		await postBid(bid);
		setBids([...bids, bid]);
	};

	return { bids, loadalState, errorLoadalState, addBid };
}

export default useBids;