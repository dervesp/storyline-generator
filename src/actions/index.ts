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
    | UpdateLifeYearSkillAction;

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

export function AddLifeYear(): AddLifeYearAction {
    const lifeYearId = generateId("lifeYear") as any;
    return {
        type: ADD_LIFE_YEAR_ACTION_KEY,
        payload: {
            lifeYearId,
        },
    };
}