import Head from 'next/head';
import Banner from './banner';
import HouseList from './houseList';
import React, { useState } from 'react';
import House from './house';

const App = () => {

	//const randomSlogan = "Test slogan – your dream home!";
	const [selectedHouse, setSelectedHouse] = useState();
	const setSelectedHouseWrapper = (house) => {
		// can add data validation and checks here...
		setSelectedHouse(house);
	}
	
	return  (
		<>
			<Head>
				<title>TERRANOVA </title>
			</Head>
			
			<Banner />
			
			{ selectedHouse ? <House house={selectedHouse} /> : <HouseList selectedHouse={setSelectedHouseWrapper} />}
		</>
	)
}

export default App;