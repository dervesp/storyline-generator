import React from "react";
import * as PropTypes from "react/lib/ReactPropTypes";
import LifeYear from "./LifeYear"

const LifeYears = ({lifeYears, addLifeYearHandler}) => (
    <div>
        <button onClick={() => addLifeYearHandler()}>ADD YEAR</button>
        <ul>
            {
                lifeYears.map((lifeYear) => <LifeYear key={lifeYear.id} lifeYear={lifeYear} />)
            }
        </ul>
    </div>
);
LifeYears.propTypes = {
    lifeYears: PropTypes.array.isRequired,
    addLifeYearHandler: PropTypes.func.isRequired,
};

export default LifeYears;