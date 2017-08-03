import * as React from "react";
import {StoreTypes} from "../store/index";
import {LifeYear} from "./LifeYear";

interface ConnectedState {
    lifeYears: StoreTypes.LifeYear[],
}

interface ConnectedDispatch {
    addHandler: Function,
}

interface OwnProps {}

export const LifeYearList = (props: ConnectedState & ConnectedDispatch & OwnProps) => (
    <div>
        <button onClick={() => props.addHandler()}>ADD YEAR</button>
        <ul>
            {
                props.lifeYears.map((lifeYear: StoreTypes.LifeYear) => <LifeYear key={lifeYear.id as any} lifeYear={lifeYear} />)
            }
        </ul>
    </div>
);