import Head from 'next/head';
import Banner from './banner';
import HouseList from './houseList';
import React, { useState } from 'react';
import House from './house';
// import getRandomSlogan from '../helpers/sloganGenerator';


// export async function generateStaticParams() {
// 	const slogan = getRandomSlogan();
// 	return {
// 		props: {
// 			slogan,
// 		},
// 	};
// }


const App = () => {

	//const randomSlogan = "Test slogan – your dream home!";
	const [selectedHouse, setSelectedHouse] = useState();
	
	return  (
		<>
			<Head>
				<title>TERRANOVA </title>
			</Head>
			
			<Banner />
			
			{ selectedHouse ? <House house={selectedHouse} /> : <HouseList selectedHouse={setSelectedHouse} />}
		</>
	)
}

export default App;