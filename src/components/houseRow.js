import formatCurrency from "../helpers/formatCurrency";

const HouseRow = ({house}) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{formatCurrency.format(house.price)}</td>
            {/* <td>{house.price}</td> */}

        </tr>
    )
}

export default HouseRow;