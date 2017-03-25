import React from "react";
import * as PropTypes from "react/lib/ReactPropTypes";
import Activity from "./Activity"

const Activities = ({activities, possibleSkillTypes, addActivityHandler, updateActivityHandler}) => (
    <div>
        <button onClick={() => addActivityHandler()}>ADD ACTIVITY</button>
        <ul>
            {
                activities.map((activity) => <Activity
                    key={activity.id}
                    activity={activity}
                    possibleSkillTypes={possibleSkillTypes}
                    updateActivityHandler={(skillType, time) => updateActivityHandler(activity.id, skillType, time)}
                />)
            }
        </ul>
    </div>
);
Activities.propTypes = {
    activities: PropTypes.array.isRequired,
    possibleSkillTypes: PropTypes.array.isRequired,
    addActivityHandler: PropTypes.func.isRequired,
    updateActivityHandler: PropTypes.func.isRequired,
};

export default Activities;