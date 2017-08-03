import {combineReducers} from "redux";
import lifeYears from "./lifeYears";
import lifeYearSkills from "./lifeYearSkills";
import {StoreTypes} from "../store/index";

export default combineReducers<StoreTypes.Entities>({
    lifeYears,
    lifeYearSkills,
});