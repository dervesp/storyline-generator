import * as uuid from "uuid";
import {StoreTypes} from "../store";

function generateId(type: string): string{
    return type + "_" + uuid();
}

type AddLifeYearSkillActionKeyType = "ADD_LIFE_YEAR_SKILL";
export const ADD_LIFE_YEAR_SKILL_ACTION_KEY: AddLifeYearSkillActionKeyType = "ADD_LIFE_YEAR_SKILL";
export type AddLifeYearSkillAction = {
    type: AddLifeYearSkillActionKeyType,
    payload: {
        lifeYearId: StoreTypes.LifeYearId,
        lifeYearSkillId: StoreTypes.LifeYearSkillId,
    }
}

type UpdateLifeYearSkillActionKeyType = "UPDATE_LIFE_YEAR_SKILL";
export const UPDATE_LIFE_YEAR_SKILL_ACTION_KEY: UpdateLifeYearSkillActionKeyType = "UPDATE_LIFE_YEAR_SKILL";
export type UpdateLifeYearSkillAction = {
    type: UpdateLifeYearSkillActionKeyType,
    payload: {
        lifeYearSkillId: StoreTypes.LifeYearSkillId,
        skillKey: StoreTypes.SkillKey,
        value: StoreTypes.SkillValue,
    }
}

type AddLifeYearStateActionKeyType = "ADD_LIFE_YEAR_STATE";
export const ADD_LIFE_YEAR_STATE_ACTION_KEY: AddLifeYearStateActionKeyType = "ADD_LIFE_YEAR_STATE";
export type AddLifeYearStateAction = {
    type: AddLifeYearStateActionKeyType,
    payload: {
        lifeYearId: StoreTypes.LifeYearId,
        lifeYearStateId: StoreTypes.LifeYearStateId,
    }
}

type UpdateLifeYearStateActionKeyType = "UPDATE_LIFE_YEAR_STATE";
export const UPDATE_LIFE_YEAR_STATE_ACTION_KEY: UpdateLifeYearStateActionKeyType = "UPDATE_LIFE_YEAR_STATE";
export type UpdateLifeYearStateAction = {
    type: UpdateLifeYearStateActionKeyType,
    payload: {
        lifeYearStateId: StoreTypes.LifeYearStateId,
        stateKey: StoreTypes.StateKey,
        value: StoreTypes.StateValue,
    }
}

type AddLifeYearActionKeyType = "ADD_LIFE_YEAR";
export const ADD_LIFE_YEAR_ACTION_KEY: AddLifeYearActionKeyType = "ADD_LIFE_YEAR";
export type AddLifeYearAction = {
    type: AddLifeYearActionKeyType,
    payload: {
        lifeYearId: StoreTypes.LifeYearId,
    }
}

export type Action = AddLifeYearAction
    | AddLifeYearSkillAction
    | UpdateLifeYearSkillAction
    | AddLifeYearStateAction
    | UpdateLifeYearStateAction;

export function AddLifeYearSkill(lifeYearId: StoreTypes.LifeYearId): AddLifeYearSkillAction {
    const lifeYearSkillId = generateId("lifeYearSkill") as any;
    return {
        type: ADD_LIFE_YEAR_SKILL_ACTION_KEY,
        payload: {
            lifeYearId,
            lifeYearSkillId,
        },
    };
}

export function UpdateLifeYearSkill(lifeYearSkillId: StoreTypes.LifeYearSkillId, skillKey: StoreTypes.SkillKey, value: StoreTypes.SkillValue): UpdateLifeYearSkillAction {
    return {
        type: UPDATE_LIFE_YEAR_SKILL_ACTION_KEY,
        payload: {
            lifeYearSkillId,
            skillKey,
            value,
        },
    };
}

export function AddLifeYearState(lifeYearId: StoreTypes.LifeYearId): AddLifeYearStateAction {
    const lifeYearStateId = generateId("lifeYearState") as any;
    return {
        type: ADD_LIFE_YEAR_STATE_ACTION_KEY,
        payload: {
            lifeYearId,
            lifeYearStateId,
        },
    };
}

export function UpdateLifeYearState(lifeYearStateId: StoreTypes.LifeYearStateId, stateKey: StoreTypes.StateKey, value: StoreTypes.StateValue): UpdateLifeYearStateAction {
    return {
        type: UPDATE_LIFE_YEAR_STATE_ACTION_KEY,
        payload: {
            lifeYearStateId,
            stateKey,
            value,
        },
    };
}

export function AddLifeYear(): AddLifeYearAction {
    const lifeYearId = generateId("lifeYear") as any;
    return {
        type: ADD_LIFE_YEAR_ACTION_KEY,
        payload: {
            lifeYearId,
        },
    };
}