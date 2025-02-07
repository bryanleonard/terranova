import Head from 'next/head';
import Banner from './banner';
import HouseList from './houseList';
import React, { useCallback, useState, useEffect } from 'react';
import House from './house';
import Loadal from './loadal';
import loadalStatus from '@/helpers/loadalStatus';
import navValues from '@/helpers/navValues';
import ComponentPicker from './componentPicker';

const navigationContext = React.createContext(navValues.home);

const App = () => {

	//const randomSlogan = "Test slogan – your dream home!";
	///const [selectedHouse, setSelectedHouse] = useState();
	// const setSelectedHouseWrapper = (house) => {
	// 	// can add data validation and checks here...
	// 	setSelectedHouse(house);
	// }

	// useEffect(() => {
	// 	console.log("NODE_ENV:", process.env.NODE_ENV);
	// }, []);
	
	const navigate = useCallback(
		(navTo, param) => setNav({ current:  navTo, param, navigate }), 
		[]
	);

	const [nav, setNav] = useState({ current: navValues.home, navigate });
	
	return  (

		<>
			<Head>
				<title>TERRANOVA</title>
			</Head>
			<navigationContext.Provider value={nav}>
				<Banner />
				<ComponentPicker currentNavLocation={nav.current} />
			</navigationContext.Provider>
			{/* { selectedHouse ? <House house={selectedHouse} /> : <HouseList selectedHouse={setSelectedHouseWrapper} />} */}
		</>

	)
}

export { navigationContext };
export default App;