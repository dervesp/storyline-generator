import * as React from "react";
import {StoreTypes} from "../store/index";
import {LifeYearState} from "./LifeYearState";

interface ConnectedState {
    lifeYearStates: StoreTypes.LifeYearStateList,
    stateKeys: StoreTypes.StateKey[],
}

interface ConnectedDispatch {
    addHandler: Function,
    updateHandler: Function,
}

interface OwnProps {}

export const LifeYearStateList = (props: ConnectedState & ConnectedDispatch & OwnProps) => (
    <div>
        <button onClick={() => props.addHandler()}>ADD STATE</button>
        <ul>
            {
                props.lifeYearStates.map((lifeYearState: StoreTypes.LifeYearState) => <LifeYearState
                    state={lifeYearState}
                    key={lifeYearState.id as any}
                    stateKeys={props.stateKeys}
                    updateHandler={(stateKey: StoreTypes.StateKey, value: StoreTypes.StateValue) => props.updateHandler(lifeYearState.id, stateKey, value)}
                />)
            }
        </ul>
    </div>
);