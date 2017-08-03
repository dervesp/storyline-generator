export namespace Store {
}
export namespace StoreTypes {
    export interface LifeYearId extends String {
        _lifeYearIdBrand: string,
    }

    export interface LifeYearSkillId extends String {
        _lifeYearSkillIdBrand: string,
    }

    export interface SkillKey extends String {
        _skillKeyBrand: string,
    }

    export interface SkillValue extends Number {
        _skillValueBrand: string,
    }

    export type LifeYear = {
        id: LifeYearId,
        skills: LifeYearSkillId[],
    }

    export type LifeYearSkill = {
        id: LifeYearSkillId,
        key: SkillKey,
        value: SkillValue,
    }

    export type LifeYearEntitiesById = {[key: string]: LifeYear};
    export type LifeYearEntitiesAllIds = LifeYearId[];

    export type LifeYearEntities = {
        byId: LifeYearEntitiesById,
        allIds: LifeYearEntitiesAllIds,
    }

    export type LifeYearSkillEntitiesById = {[key: string]: LifeYearSkill};
    export type LifeYearSkillEntitiesAllIds = LifeYearSkillId[];

    export type LifeYearSkillEntities = {
        byId: LifeYearSkillEntitiesById,
        allIds: LifeYearSkillEntitiesAllIds,
    }

    export type Entities = {
        lifeYears: LifeYearEntities,
        lifeYearSkills: LifeYearSkillEntities,
    }

    export type All = {
        entities: Entities,
    }
}