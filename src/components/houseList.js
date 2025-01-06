import { useEffect, useState } from "react";
import styles from "./houseList.module.scss";
import HouseRow, { HouseRowMem } from "./houseRow";


const HouseList = () => {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		const getHouses = async () => {
			const resp = await fetch("/api/houses");
			const data =  await resp.json();
			setHouses(data);
		}
		getHouses();
	}, []);

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
					<h5 className="theme-text-color-secondary text-center">
						Properties on the market.
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
						{houses.map(h => (
							<HouseRowMem key={h.id} props={h} />)
						)}
					</tbody>
				</table>

				<button className="btn btn-primary btn-theme btn-inline" onClick={addHouse}>
					Add
				</button>

                </div>
			</div>
		</>
	);
};

export default HouseList;
