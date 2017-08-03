import * as React from "react";
import {StoreTypes} from "../store/index";
import {LifeYearSkillListContainer} from "./LifeYearSkillListContainer";

interface ConnectedState {
    lifeYear: StoreTypes.LifeYear,
}

interface ConnectedDispatch {}

interface OwnProps {}

export const LifeYear = (props: ConnectedState & ConnectedDispatch & OwnProps) => (
    <li>
        <LifeYearSkillListContainer lifeYearId={props.lifeYear.id} lifeYearSkillIds={props.lifeYear.skills} />
    </li>
);