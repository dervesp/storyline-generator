import {combineReducers} from "redux";
import {createReducer} from "./reducerTools";

function addLifeYearEntry(state, action) {
    const {payload} = action;
    const {lifeYearId} = payload;

    const lifeYear = {
        id: lifeYearId,
        activities: [],
    };

    return {
        ...state,
        [lifeYearId]: lifeYear,
    }
}

function addLifeYearId(state, action) {
    const {payload} = action;
    const {lifeYearId} = payload;

    return state.concat(lifeYearId);
}

function addActivity(state, action) {
    const {payload} = action;
    const {lifeYearId, activityId} = payload;

    const lifeYear = state[lifeYearId];

    return {
        ...state,
        [lifeYearId]: {
            ...lifeYear,
            activities: lifeYear.activities.concat(activityId),
        }
    }
}

const lifeYearById = createReducer({}, {
    "ADD_LIFE_YEAR": addLifeYearEntry,
    "ADD_ACTIVITY": addActivity,
});

const allLifeYears = createReducer([], {
    "ADD_LIFE_YEAR": addLifeYearId,
});

export default combineReducers({
    byId: lifeYearById,
    allId: allLifeYears,
});

export function getLifeYear(state, id) {
    return state.byId[id]
}

export function getLifeYears(state) {
    return state.allId.map(id => getLifeYear(state, id));
}