import {combineReducers, Reducer} from "redux";
import {createReducer} from "./reducerTools";
import {StoreTypes} from "../store";
import {
    ADD_LIFE_YEAR_SKILL_ACTION_KEY, AddLifeYearSkillAction,
    UPDATE_LIFE_YEAR_SKILL_ACTION_KEY, UpdateLifeYearSkillAction,
} from "../actions";

function addActivityEntry(state: StoreTypes.LifeYearSkillEntitiesById, action: AddLifeYearSkillAction): StoreTypes.LifeYearSkillEntitiesById {
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = action.payload.lifeYearSkillId;

    const lifeYearSkill: StoreTypes.LifeYearSkill = {
        id: lifeYearSkillId,
        key: "" as any,
        value: 0 as any,
    };

    return {
        ...state,
        [lifeYearSkillId as any]: lifeYearSkill,
    };
}

function updateLifeYearSkill(state: StoreTypes.LifeYearSkillEntitiesById, action: UpdateLifeYearSkillAction): StoreTypes.LifeYearSkillEntitiesById {
    const payload = action.payload;
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = payload.lifeYearSkillId;
    const key: StoreTypes.SkillKey = payload.skillKey;
    const value: StoreTypes.SkillValue = payload.value;

    const lifeYearSkill: StoreTypes.LifeYearSkill = state[lifeYearSkillId as any];

    return {
        ...state,
        [lifeYearSkillId as any]: {
            ...lifeYearSkill,
            key,
            value,
        },
    };
}

function addLifeYearSkillId(state: StoreTypes.LifeYearSkillEntitiesAllIds, action: AddLifeYearSkillAction): StoreTypes.LifeYearSkillEntitiesAllIds {
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = action.payload.lifeYearSkillId;

    return state.concat(lifeYearSkillId as any);
}

const lifeYearSkillById: Reducer<StoreTypes.LifeYearSkillEntitiesById> = createReducer({}, {
    [ADD_LIFE_YEAR_SKILL_ACTION_KEY]: addActivityEntry,
    [UPDATE_LIFE_YEAR_SKILL_ACTION_KEY]: updateLifeYearSkill,
});

const lifeYearSkillAllIds: Reducer<StoreTypes.LifeYearSkillEntitiesAllIds> = createReducer([], {
    [ADD_LIFE_YEAR_SKILL_ACTION_KEY]: addLifeYearSkillId,
});

export default combineReducers<StoreTypes.LifeYearSkillEntities>({
    byId: lifeYearSkillById,
    allIds: lifeYearSkillAllIds,
});

export function getLifeYearSkill(state: StoreTypes.LifeYearSkillEntities, id: StoreTypes.LifeYearSkillId): StoreTypes.LifeYearSkill {
    return state.byId[id as any];
}

export function getLifeYearSkills(state: StoreTypes.LifeYearSkillEntities, ids: StoreTypes.LifeYearSkillId[]): StoreTypes.LifeYearSkill[] {
    return ids.map((id: StoreTypes.LifeYearSkillId) => getLifeYearSkill(state, id));
}