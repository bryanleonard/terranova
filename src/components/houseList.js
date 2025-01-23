import React from "react";
import styles from "./houseList.module.scss";
import HouseRow, { HouseRowMem } from "./houseRow";
import useHouses from "@/hooks/useHouses";


const HouseList = ({selectedHouse}) => {
	const { houses, setHouses } = useHouses();

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
						Your search starts here.
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
							<HouseRowMem key={h.id} props={h} selectHouse={selectedHouse} />)
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
