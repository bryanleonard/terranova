import React from "react";
import styles from "./houseList.module.scss";
import HouseRow, { HouseRowMem } from "./houseRow";
import useHouses from "@/hooks/useHouses";
import loadalStatus from "@/helpers/loadalStatus";
import Loadal from "./loadal";


// const HouseList = ({selectedHouse}) => {
const HouseList = () => {
	const { houses, setHouses, loadalState } = useHouses();

	if (loadalState !== loadalStatus.loaded) {
		return <Loadal loadalState={ loadalState } />;
	}

	const addHouse = () => {
		setHouses([
			...houses,
			{
				id: houses.length + 1,
				address: "32 Valley Way, Newark",
				country: "United States of America",
				price: 23000,
				description: "This 3-bedroom, 2-bathroom home has its original hardwood floors, dated kitchen, and unfinished basement waiting for your vision. Nestled in a neighborhood with Newark's characteristic grit, the property reflects the city's challenges. The backyard needs TLC, and the detached garage shows its age, but there's off-street parking and room to make it your own!"
			},
		]);
	};

	return (
		<>
			<div className="row mb-2 blink">
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
							<HouseRowMem key={h.id} props={h} />)
							// <HouseRowMem key={h.id} props={h} selectHouse={selectedHouse} />)
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
