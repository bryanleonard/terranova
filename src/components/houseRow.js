import React, { useContext } from "react";
import formatCurrency from "../helpers/formatCurrency";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const HouseRow = ( { props } ) => {

    const { navigate } = useContext(navigationContext);

    let priceClass;
    if (props.price < 500000) {
        priceClass = "text-theme"
    }

    return (
        <tr onClick={() => navigate(navValues.house, props)}>
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