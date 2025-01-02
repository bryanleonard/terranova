import Head from 'next/head';
import Banner from './banner';
import HouseList from './houseList';

const App = () => {
	return  (
		<>
			<Head>
				<title>TERRANOVA</title>
			</Head>
			<Banner>Providing houses all over the world!</Banner>
			<HouseList />
		</>
	)
}

export default App;