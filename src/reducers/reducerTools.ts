import {Action} from "../actions";
import {Reducer} from "redux";

export function createReducer<T>(initialState: T, handlers: {[actionType: string]: Reducer<T>}): Reducer<T> {
    return (state: T = initialState, action: Action) => {
        if (Object.keys(handlers).indexOf(action.type) != -1) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}