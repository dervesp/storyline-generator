import {List, OrderedMap} from "immutable";

export namespace Store {
}
export namespace StoreTypes {
    export interface LifeYearId extends String {
        _lifeYearIdBrand: string,
    }
    export type LifeYearIdList = List<LifeYearId>;
    export function LifeYearIdList(): LifeYearIdList {
        return List<LifeYearId>();
    }

    export interface LifeYearSkillId extends String {
        _lifeYearSkillIdBrand: string,
    }
    export type LifeYearSkillIdList = List<LifeYearSkillId>;
    export function LifeYearSkillIdList(): LifeYearSkillIdList {
        return List<LifeYearSkillId>();
    }

    export interface SkillKey extends String {
        _skillKeyBrand: string,
    }

    export interface SkillValue extends Number {
        _skillValueBrand: string,
    }

    export type LifeYear = {
        id: LifeYearId,
        skills: LifeYearSkillIdList,
    }
    export type LifeYearList = List<LifeYear>;
    export function LifeYearList(): LifeYearList {
        return List<LifeYear>();
    }

    export type LifeYearSkill = {
        id: LifeYearSkillId,
        key: SkillKey,
        value: SkillValue,
    }
    export type LifeYearSkillList = List<LifeYearSkill>;
    export function LifeYearSkillList(): LifeYearSkillList {
        return List<LifeYearSkill>();
    }

    export type LifeYearEntitiesMap = OrderedMap<LifeYearId, LifeYear>;
    export function LifeYearEntitiesMap(): LifeYearEntitiesMap {
        return OrderedMap<LifeYearId, LifeYear>();
    }

    export type LifeYearEntities = {
        byId: LifeYearEntitiesMap,
        allIds: LifeYearIdList,
    }

    export type LifeYearSkillEntitiesMap = OrderedMap<LifeYearSkillId, LifeYearSkill>;
    export function LifeYearSkillEntitiesMap(): LifeYearSkillEntitiesMap {
        return OrderedMap<LifeYearSkillId, LifeYearSkill>();
    }

    export type LifeYearSkillEntities = {
        byId: LifeYearSkillEntitiesMap,
        allIds: LifeYearSkillIdList,
    }

    export type Entities = {
        lifeYears: LifeYearEntities,
        lifeYearSkills: LifeYearSkillEntities,
    }

    export type All = {
        entities: Entities,
    }
}