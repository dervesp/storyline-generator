import {combineReducers, Reducer} from "redux";
import {createReducer} from "./reducerTools";
import {StoreTypes} from "../store/index";
import {
    ADD_LIFE_YEAR_ACTION_KEY, AddLifeYearAction,
    ADD_LIFE_YEAR_SKILL_ACTION_KEY, AddLifeYearSkillAction,
    ADD_LIFE_YEAR_STATE_ACTION_KEY, AddLifeYearStateAction,
} from "../actions/index";

function addLifeYearEntry(state: StoreTypes.LifeYearEntitiesMap, action: AddLifeYearAction): StoreTypes.LifeYearEntitiesMap {
    const lifeYearId: StoreTypes.LifeYearId = action.payload.lifeYearId;

    const lifeYear: StoreTypes.LifeYear = {
        id: lifeYearId,
        skills: StoreTypes.LifeYearSkillIdList(),
        states: StoreTypes.LifeYearStateIdList(),
    };

    return state.set(lifeYearId, lifeYear);
}

function addLifeYearId(state: StoreTypes.LifeYearIdList, action: AddLifeYearAction): StoreTypes.LifeYearIdList {
    const lifeYearId: StoreTypes.LifeYearId = action.payload.lifeYearId;

    return state.push(lifeYearId);
}

function addLifeYearSkill(state: StoreTypes.LifeYearEntitiesMap, action: AddLifeYearSkillAction): StoreTypes.LifeYearEntitiesMap {
    const {payload} = action;
    const lifeYearId: StoreTypes.LifeYearId = payload.lifeYearId;
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = payload.lifeYearSkillId;

    const lifeYear: StoreTypes.LifeYear = state.get(lifeYearId);

    return state.set(lifeYearId, {
        ...lifeYear,
        skills: lifeYear.skills.push(lifeYearSkillId),
    });
}

function addLifeYearState(state: StoreTypes.LifeYearEntitiesMap, action: AddLifeYearStateAction): StoreTypes.LifeYearEntitiesMap {
    const {payload} = action;
    const lifeYearId: StoreTypes.LifeYearId = payload.lifeYearId;
    const lifeYearStateId: StoreTypes.LifeYearStateId = payload.lifeYearStateId;

    const lifeYear: StoreTypes.LifeYear = state.get(lifeYearId);

    return state.set(lifeYearId, {
        ...lifeYear,
        states: lifeYear.states.push(lifeYearStateId),
    });
}

const lifeYearById: Reducer<StoreTypes.LifeYearEntitiesMap> = createReducer(StoreTypes.LifeYearEntitiesMap(), {
    [ADD_LIFE_YEAR_ACTION_KEY]: addLifeYearEntry,
    [ADD_LIFE_YEAR_SKILL_ACTION_KEY]: addLifeYearSkill,
    [ADD_LIFE_YEAR_STATE_ACTION_KEY]: addLifeYearState,
});

const lifeYearAllIds: Reducer<StoreTypes.LifeYearIdList> = createReducer(StoreTypes.LifeYearIdList(), {
    [ADD_LIFE_YEAR_ACTION_KEY]: addLifeYearId,
});

export default combineReducers<StoreTypes.LifeYearEntities>({
    byId: lifeYearById,
    allIds: lifeYearAllIds,
});

export function getLifeYear(state: StoreTypes.LifeYearEntities, id: StoreTypes.LifeYearId): StoreTypes.LifeYear {
    return state.byId.get(id);
}

export function getLifeYears(state: StoreTypes.LifeYearEntities): StoreTypes.LifeYearList {
    return state.allIds.map((id: StoreTypes.LifeYearId) => getLifeYear(state, id)) as StoreTypes.LifeYearList;
}