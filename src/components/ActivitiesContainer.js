import {connect} from "react-redux";
import * as actions from "../actions/Actions";
import {allSkillTypes} from "../models/SkillType";
import {getActivities} from "../reducers/activities";
import Activities from "./Activities";

function mapStateToProps (state, ownProps) {
    return {
        activities: getActivities(state.entities.activities, ownProps.activities),
        possibleSkillTypes: allSkillTypes(),
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    const { dispatch } = dispatchProps;
    const { lifeYearId } = ownProps;

    return {
        ...ownProps,
        ...stateProps,
        addActivityHandler: () => dispatch(actions.addActivity(lifeYearId)),
        updateActivityHandler: (activityId, skillType, time) => dispatch(actions.updateActivity(activityId, skillType, time)),
    }
}

export default connect(
    mapStateToProps,
    null,
    mergeProps,
)(Activities);
