import React from "react";
import * as PropTypes from "react/lib/ReactPropTypes";

class Activity extends React.Component {
    render() {
        let skillTypeSelect;
        let timeInput;
        const {activity, possibleSkillTypes, updateActivityHandler} = this.props;
        const {skillType, time} = activity;
        const onUpdateActivity = () => updateActivityHandler(skillTypeSelect.value, parseFloat(timeInput.value));
        return (
            <li>
                <select
                    ref={(node) => {skillTypeSelect = node}}
                    value={skillType}
                    onChange={onUpdateActivity}
                >
                    <option key="" value="" disabled="disabled">select skill</option>
                    {
                        possibleSkillTypes.map((skillType) => <option key={skillType} value={skillType}>{skillType}</option>)
                    }
                </select>
                <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    ref={(node) => {timeInput = node}}
                    value={time}
                    onChange={onUpdateActivity}
                />
            </li>
        );
    }
}

Activity.propTypes = {
    activity: PropTypes.shape({
        skillType: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
    }).isRequired,
    possibleSkillTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    updateActivityHandler: PropTypes.func.isRequired,
};

export default Activity;