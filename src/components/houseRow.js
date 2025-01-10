import React from "react";
import formatCurrency from "../helpers/formatCurrency";

const HouseRow = ( { props } ) => {

    let priceClass;
    if (props.price < 500000) {
        priceClass = "text-theme"
    }

    return (
        <tr>
            <td>{props.address}</td>
            <td>{props.country}</td>
            <td className={`${props.price >= 600000 ? "text-theme" : ""}`}>{formatCurrency.format(props.price)}</td>
        </tr>
    )
}

// React.memo is insignificant in this instance but keeping for funsies.
const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMem };