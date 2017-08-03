import { combineReducers } from "redux";
import entities from "./entities";
import {StoreTypes} from "../store/index";

export default combineReducers<StoreTypes.All>({
    entities,
});