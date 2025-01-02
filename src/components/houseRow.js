import formatCurrency from "../helpers/formatCurrency";

const HouseRow = ( { props } ) => {
    return (
        <tr>
            <td>{props.address}</td>
            <td>{props.country}</td>
            <td>{formatCurrency.format(props.price)}</td>
        </tr>
    )
}

export default HouseRow;