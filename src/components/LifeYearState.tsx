import * as React from "react";
import {StoreTypes} from "../store/index";

interface ConnectedState {
    state: StoreTypes.LifeYearState,
    stateKeys: StoreTypes.StateKey[],
}

interface ConnectedDispatch {
    updateHandler: (key: StoreTypes.StateKey, value: StoreTypes.StateValue) => void,
}

interface OwnProps {}

interface OwnState {}

export class LifeYearState extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
    render() {
        let stateTypeSelect: HTMLSelectElement;
        let valueInput: HTMLInputElement;

        const lifeYearState: StoreTypes.LifeYearState = this.props.state;
        const stateKeys: StoreTypes.StateKey[] = this.props.stateKeys;
        const updateHandler: Function = this.props.updateHandler;
        const currentStateKey: StoreTypes.StateKey = lifeYearState.key;
        const currentStateValue: StoreTypes.StateValue = lifeYearState.value;
        const onUpdateActivity = () => updateHandler(stateTypeSelect.value, parseFloat(valueInput.value));
        return (
            <li>
                <select
                    ref={(node) => {stateTypeSelect = node}}
                    value={currentStateKey as any as string}
                    onChange={onUpdateActivity}
                >
                    <option key="" value="" disabled={true}>select state</option>
                    {
                        stateKeys.map((stateKey: StoreTypes.StateKey) => {
                            const stateKeyString: string = stateKey as any;
                            return <option key={stateKeyString} value={stateKeyString}>{stateKeyString}</option>
                        })
                    }
                </select>
                <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    ref={(node) => {valueInput = node}}
                    value={currentStateValue as any}
                    onChange={onUpdateActivity}
                />
            </li>
        );
    }
}