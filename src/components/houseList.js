import { useState } from "react";
import styles from "./houseList.module.scss";
import HouseRow from "./houseRow";

const houseArray = [
	{
		id: 1,
		address: "12 Valley of Kings, Geneva",
		country: "Switzerland",
		price: 900000,
	},
	{
		id: 2,
		address: "89 Road of Forks, Bern",
		country: "Switzerland",
		price: 500000,
	},
	{
		id: 3,
		address: "123 Elm St, Ohio",
		country: "United States of America",
		price: 250000,
	},
];

const HouseList = () => {
	const [houses, setHouses] = useState(houseArray);

	const addHouse = () => {
		setHouses([
			...houses,
			{
				id: houses.length + 1,
				address: "32 Valley Way, Newark",
				country: "United States of America",
				price: 23000,
			},
		]);
	};

	return (
		<>
			<div className="row mb-2">
				<div className="col">
					<h5 className="theme-text-color text-center">
						Properties on the market
					</h5>
				</div>
			</div>

			<div className="row">
                <div className="col">
				<table className={`${styles.houseList} table table-hover`}>
					<thead>
						<tr>
							<td>Address</td>
							<td>Country</td>
							<td>Asking Price</td>
						</tr>
					</thead>
					
					<tbody>	
						{houses.map(h => <HouseRow key={h.id} props={h} />)}
					</tbody>
				</table>

				<button className="btn btn-primary btn-inline" onClick={addHouse}>
					Add
				</button>

                </div>
			</div>
		</>
	);
};

export default HouseList;
