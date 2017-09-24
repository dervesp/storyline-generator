import {combineReducers} from "redux";
import lifeYears from "./lifeYears";
import lifeYearSkills from "./lifeYearSkills";
import {StoreTypes} from "../store/index";
import lifeYearStates from "./lifeYearStates";

export default combineReducers<StoreTypes.Entities>({
    lifeYears,
    lifeYearSkills,
    lifeYearStates,
});