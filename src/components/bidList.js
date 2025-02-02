import formatCurrency from "@/helpers/formatCurrency";
import styles from "./bidList.module.scss";
import React from 'react';

const BidList = ({ bids }) => {

	return (
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
	);
};

export default BidList;
