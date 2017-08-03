import * as React from "react";
import * as redux from 'redux';
import rootReducer from './reducers';
import {StoreTypes} from "./store/index";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {LifeYearListContainer} from "./components/LifeYearListContainer";
const store: redux.Store<StoreTypes.All> = redux.createStore(
    rootReducer,
    {} as StoreTypes.All,
);

store.subscribe(() => {
});

// Commented out ("let HTML app be HTML app!")
window.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    ReactDOM.render(
        <Provider store={store}>
            <LifeYearListContainer />
        </Provider>,
        rootEl
    );
});