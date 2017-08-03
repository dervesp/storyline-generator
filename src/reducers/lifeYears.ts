import {combineReducers, Reducer} from "redux";
import {createReducer} from "./reducerTools";
import {StoreTypes} from "../store/index";
import {
    ADD_LIFE_YEAR_ACTION_KEY, AddLifeYearAction,
    ADD_LIFE_YEAR_SKILL_ACTION_KEY, AddLifeYearSkillAction,
} from "../actions/index";

function addLifeYearEntry(state: StoreTypes.LifeYearEntitiesById, action: AddLifeYearAction) {
    const lifeYearId: StoreTypes.LifeYearId = action.payload.lifeYearId;

    const lifeYear: StoreTypes.LifeYear = {
        id: lifeYearId,
        skills: [],
    };

    return {
        ...state,
        [lifeYearId as any]: lifeYear,
    };
}

function addLifeYearId(state: StoreTypes.LifeYearEntitiesAllIds, action: AddLifeYearAction) {
    const lifeYearId: StoreTypes.LifeYearId = action.payload.lifeYearId;

    return state.concat(lifeYearId as any);
}

function addLifeYearSkill(state: StoreTypes.LifeYearEntitiesById, action: AddLifeYearSkillAction) {
    const {payload} = action;
    const lifeYearId: StoreTypes.LifeYearId = payload.lifeYearId;
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = payload.lifeYearSkillId;

    const lifeYear: StoreTypes.LifeYear = state[lifeYearId as any];

    return {
        ...state,
        [lifeYearId as any]: {
            ...lifeYear,
            skills: lifeYear.skills.concat(lifeYearSkillId as any),
        },
    };
}

const lifeYearById: Reducer<StoreTypes.LifeYearEntitiesById> = createReducer({}, {
    [ADD_LIFE_YEAR_ACTION_KEY]: addLifeYearEntry,
    [ADD_LIFE_YEAR_SKILL_ACTION_KEY]: addLifeYearSkill,
});

const lifeYearAllIds: Reducer<StoreTypes.LifeYearEntitiesAllIds> = createReducer([], {
    [ADD_LIFE_YEAR_ACTION_KEY]: addLifeYearId,
});

export default combineReducers<StoreTypes.LifeYearEntities>({
    byId: lifeYearById,
    allIds: lifeYearAllIds,
});

export function getLifeYear(state: StoreTypes.LifeYearEntities, id: StoreTypes.LifeYearId): StoreTypes.LifeYear {
    return state.byId[id as any];
}

export function getLifeYears(state: StoreTypes.LifeYearEntities): StoreTypes.LifeYear[] {
    return state.allIds.map((id: StoreTypes.LifeYearId) => getLifeYear(state, id));
}