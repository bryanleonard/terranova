import formatCurrency from "@/helpers/formatCurrency";
import styles from "./bids.module.scss";
import useBids from '@/hooks/useBids';
import { useState } from 'react';
import Loadal from './loadal';
import loadalStatus from '@/helpers/loadalStatus';
import React from 'react';

const Bids = ({ house }) => {
	const { bids, loadalState, addBid } = useBids(house.id);

	const emptyBid = {
		houseId: house.id,
		bidder: "",
		amount: 0,
	};

	const [newBid, setNewBid] = useState(emptyBid);

	if (loadalState !== loadalStatus.loaded) {
		return <Loadal loadalState={loadalState} />;
	}

	const onBidSubmitClick = () => {
		addBid(newBid);
		setNewBid(emptyBid);
	};
	return (
		<>
			<div className="row mt-4">
				<div className="col-12">

					<table className={`${styles.bidsList} table table-sm table-hover`}>
						<thead>
							<tr>
								<th>Bidder</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							{bids.map((b) => (
								<tr key={b.id}>
									<td>{b.bidder}</td>
									<td>{formatCurrency.format(b.amount)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-12 col-lg-5 mb-3 mb-mlg-0">
					<input id="bidder"
						className="form-control"
						type="text"
						value={newBid.bidder}
						onChange={(e) =>
							setNewBid({ ...newBid, bidder: e.target.value })
						}
						placeholder="Bidder"
					></input>
				</div>
				<div className="col-12 col-md-6 col-lg-5 mb-3 mb-lg-0">
					<input id="amount"
						className="form-control"
						type="number"
						value={newBid.amount}
						onChange={(e) =>
							setNewBid({
								...newBid,
								amount: parseInt(e.target.value),
							})
						}
						placeholder="Amount"
					></input>
				</div>
				<div className="col-12 col-md-6 col-lg-2">
					<button className="btn btn-theme w-100"
						onClick={onBidSubmitClick}>
						Add
					</button>
				</div>
			</div>
		</>
	);
};

export default Bids;
