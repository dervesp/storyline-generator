import {combineReducers, Reducer} from "redux";
import {createReducer} from "./reducerTools";
import {StoreTypes} from "../store";
import {
    ADD_LIFE_YEAR_STATE_ACTION_KEY, AddLifeYearStateAction,
    UPDATE_LIFE_YEAR_STATE_ACTION_KEY, UpdateLifeYearStateAction,
} from "../actions";

function addLifeYearState(state: StoreTypes.LifeYearStateEntitiesMap, action: AddLifeYearStateAction): StoreTypes.LifeYearStateEntitiesMap {
    const lifeYearStateId: StoreTypes.LifeYearStateId = action.payload.lifeYearStateId;

    const lifeYearState: StoreTypes.LifeYearState = {
        id: lifeYearStateId,
        key: "" as any,
        value: 0 as any,
    };

    return state.set(lifeYearStateId, lifeYearState);
}

function updateLifeYearState(state: StoreTypes.LifeYearStateEntitiesMap, action: UpdateLifeYearStateAction): StoreTypes.LifeYearStateEntitiesMap {
    const payload = action.payload;
    const lifeYearStateId: StoreTypes.LifeYearStateId = payload.lifeYearStateId;
    const key: StoreTypes.StateKey = payload.stateKey;
    const value: StoreTypes.StateValue = payload.value;

    const lifeYearState: StoreTypes.LifeYearState = state.get(lifeYearStateId);

    return state.set(lifeYearStateId, {
        ...lifeYearState,
        key,
        value,
    });
}

function addLifeYearStateId(state: StoreTypes.LifeYearStateIdList, action: AddLifeYearStateAction): StoreTypes.LifeYearStateIdList {
    const lifeYearStateId: StoreTypes.LifeYearStateId = action.payload.lifeYearStateId;

    return state.push(lifeYearStateId);
}

const lifeYearStateById: Reducer<StoreTypes.LifeYearStateEntitiesMap> = createReducer(StoreTypes.LifeYearStateEntitiesMap(), {
    [ADD_LIFE_YEAR_STATE_ACTION_KEY]: addLifeYearState,
    [UPDATE_LIFE_YEAR_STATE_ACTION_KEY]: updateLifeYearState,
});

const lifeYearStateAllIds: Reducer<StoreTypes.LifeYearStateIdList> = createReducer(StoreTypes.LifeYearStateIdList(), {
    [ADD_LIFE_YEAR_STATE_ACTION_KEY]: addLifeYearStateId,
});

export default combineReducers<StoreTypes.LifeYearStateEntities>({
    byId: lifeYearStateById,
    allIds: lifeYearStateAllIds,
});

export function getLifeYearState(state: StoreTypes.LifeYearStateEntities, id: StoreTypes.LifeYearStateId): StoreTypes.LifeYearState {
    return state.byId.get(id);
}

export function getLifeYearStates(state: StoreTypes.LifeYearStateEntities, ids: StoreTypes.LifeYearStateIdList): StoreTypes.LifeYearStateList {
    return ids.map((id: StoreTypes.LifeYearStateId) => getLifeYearState(state, id)) as StoreTypes.LifeYearStateList;
}