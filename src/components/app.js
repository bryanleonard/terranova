import Head from 'next/head';
import Banner from './banner';
import HouseList from './houseList';

const App = () => {
	return  (
		<>
			<Head>
				<title>TERRANOVA</title>
			</Head>
			<Banner headerText="Providing houses all over the world."/>
			<HouseList />
		</>
	)
}

export default App;