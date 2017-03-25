import {combineReducers} from "redux";
import {createReducer} from "./reducerTools";

function addActivityEntry(state, action) {
    const {payload} = action;
    const {activityId} = payload;

    const activity = {
        id: activityId,
        skillType: "",
        time: 0,
    };

    return {
        ...state,
        [activityId]: activity,
    }
}

function updateActivity(state, action) {
    const {payload} = action;
    const {activityId, skillType, time} = payload;

    const activity = state[activityId];

    return {
        ...state,
        [activityId]: {
            ...activity,
            skillType,
            time
        },
    }
}

function addActivityId(state, action) {
    const {payload} = action;
    const {activityId} = payload;

    return state.concat(activityId);
}

const activitiesById = createReducer({}, {
    "ADD_ACTIVITY": addActivityEntry,
    "UPDATE_ACTIVITY": updateActivity
});

const allActivities = createReducer([], {
    "ADD_ACTIVITY": addActivityId,
});

export default combineReducers({
    byId: activitiesById,
    allId: allActivities,
});

export function getActivity(state, id) {
    return state.byId[id]
}

export function getActivities(state, ids) {
    return ids.map(id => getActivity(state, id));
}