import React from "react";
import { useState } from "react";

const AddBid = ({house, addBid}) => {

	const emptyBid = {
		house: house.id,
		bidder: '',
		amount: 0,
		id: null
	};

	const [newBid, setNewBid] = useState(emptyBid);

	const onBidSubmitClick = () => {
		addBid(newBid);
		setNewBid(emptyBid);
	}

	return (
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
	)
}

export default AddBid;