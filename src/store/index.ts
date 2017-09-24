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

    export interface LifeYearStateId extends String {
        _lifeYearStateIdBrand: string,
    }
    export type LifeYearStateIdList = List<LifeYearStateId>;
    export function LifeYearStateIdList(): LifeYearStateIdList {
        return List<LifeYearStateId>();
    }

    export interface SkillKey extends String {
        _skillKeyBrand: string,
    }

    export interface SkillValue extends Number {
        _skillValueBrand: string,
    }

    export interface StateKey extends String {
        _stateKeyBrand: string,
    }

    export interface StateValue extends Number {
        _stateValueBrand: string,
    }

    export type LifeYear = {
        id: LifeYearId,
        skills: LifeYearSkillIdList,
        states: LifeYearStateIdList,
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

    export type LifeYearState = {
        id: LifeYearStateId,
        key: StateKey,
        value: StateValue,
    }
    export type LifeYearStateList = List<LifeYearState>;
    export function LifeYearStateList(): LifeYearStateList {
        return List<LifeYearState>();
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

    export type LifeYearStateEntitiesMap = OrderedMap<LifeYearStateId, LifeYearState>;
    export function LifeYearStateEntitiesMap(): LifeYearStateEntitiesMap {
        return OrderedMap<LifeYearStateId, LifeYearState>();
    }

    export type LifeYearStateEntities = {
        byId: LifeYearStateEntitiesMap,
        allIds: LifeYearStateIdList,
    }

    export type Entities = {
        lifeYears: LifeYearEntities,
        lifeYearSkills: LifeYearSkillEntities,
        lifeYearStates: LifeYearStateEntities,
    }

    export type All = {
        entities: Entities,
    }
}