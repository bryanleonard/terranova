import styles from './houseList.module.scss';
import HouseRow from './houseRow';

const houses = [
    {
        id: 1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000
    },
    {
        id: 3,
        address: "123 Elm St, Ohio",
        country: "United States of America",
        price: 250000
    }
];


const HouseList = () => {
    return (
        <>
            <div className="row mb-2">
                <h5 className="theme-text-color text-center">
                    Currently on the market
                </h5>
            </div>

            <table className={`${styles.houseList} table table-hover`}>
                <thead>
                    <tr>
                        <td>Address</td>
                        <td>Country</td>
                        <td>Asking Price</td>
                    </tr>
                </thead>

                <tbody>
                    {houses.map((h) => (
                        <HouseRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default HouseList;