import {combineReducers, Reducer} from "redux";
import {createReducer} from "./reducerTools";
import {StoreTypes} from "../store";
import {
    ADD_LIFE_YEAR_SKILL_ACTION_KEY, AddLifeYearSkillAction,
    UPDATE_LIFE_YEAR_SKILL_ACTION_KEY, UpdateLifeYearSkillAction,
} from "../actions";

function addLifeYearSkill(state: StoreTypes.LifeYearSkillEntitiesMap, action: AddLifeYearSkillAction): StoreTypes.LifeYearSkillEntitiesMap {
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = action.payload.lifeYearSkillId;

    const lifeYearSkill: StoreTypes.LifeYearSkill = {
        id: lifeYearSkillId,
        key: "" as any,
        value: 0 as any,
    };

    return state.set(lifeYearSkillId, lifeYearSkill);
}

function updateLifeYearSkill(state: StoreTypes.LifeYearSkillEntitiesMap, action: UpdateLifeYearSkillAction): StoreTypes.LifeYearSkillEntitiesMap {
    const payload = action.payload;
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = payload.lifeYearSkillId;
    const key: StoreTypes.SkillKey = payload.skillKey;
    const value: StoreTypes.SkillValue = payload.value;

    const lifeYearSkill: StoreTypes.LifeYearSkill = state.get(lifeYearSkillId);

    return state.set(lifeYearSkillId, {
        ...lifeYearSkill,
        key,
        value,
    });
}

function addLifeYearSkillId(state: StoreTypes.LifeYearSkillIdList, action: AddLifeYearSkillAction): StoreTypes.LifeYearSkillIdList {
    const lifeYearSkillId: StoreTypes.LifeYearSkillId = action.payload.lifeYearSkillId;

    return state.push(lifeYearSkillId);
}

const lifeYearSkillById: Reducer<StoreTypes.LifeYearSkillEntitiesMap> = createReducer(StoreTypes.LifeYearSkillEntitiesMap(), {
    [ADD_LIFE_YEAR_SKILL_ACTION_KEY]: addLifeYearSkill,
    [UPDATE_LIFE_YEAR_SKILL_ACTION_KEY]: updateLifeYearSkill,
});

const lifeYearSkillAllIds: Reducer<StoreTypes.LifeYearSkillIdList> = createReducer(StoreTypes.LifeYearSkillIdList(), {
    [ADD_LIFE_YEAR_SKILL_ACTION_KEY]: addLifeYearSkillId,
});

export default combineReducers<StoreTypes.LifeYearSkillEntities>({
    byId: lifeYearSkillById,
    allIds: lifeYearSkillAllIds,
});

export function getLifeYearSkill(state: StoreTypes.LifeYearSkillEntities, id: StoreTypes.LifeYearSkillId): StoreTypes.LifeYearSkill {
    return state.byId.get(id);
}

export function getLifeYearSkills(state: StoreTypes.LifeYearSkillEntities, ids: StoreTypes.LifeYearSkillIdList): StoreTypes.LifeYearSkillList {
    return ids.map((id: StoreTypes.LifeYearSkillId) => getLifeYearSkill(state, id)) as StoreTypes.LifeYearSkillList;
}