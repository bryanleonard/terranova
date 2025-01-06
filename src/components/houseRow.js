import React from "react";
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

// React.memo is insignificant in this instance but keeping for funsies.
const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMem };