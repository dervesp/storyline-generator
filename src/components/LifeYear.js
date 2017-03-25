import React from "react";
import * as PropTypes from "react/lib/ReactPropTypes";
import ActivitiesContainer from "./ActivitiesContainer"

const LifeYear = ({lifeYear}) => (
    <li>
        <ActivitiesContainer lifeYearId={lifeYear.id} activities={lifeYear.activities} />
    </li>
);
LifeYear.propTypes = {
    lifeYear: PropTypes.shape({
        id: PropTypes.string.isRequired,
        activities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
};

export default LifeYear;