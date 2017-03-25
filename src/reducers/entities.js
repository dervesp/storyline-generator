import {combineReducers} from "redux";
import lifeYears from "./lifeYears";
import activities from "./activities";

export default combineReducers({
    lifeYears,
    activities,
});