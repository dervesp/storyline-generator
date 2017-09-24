import * as React from "react";
import {StoreTypes} from "../store/index";
import {LifeYearSkill} from "./LifeYearSkill";

interface ConnectedState {
    lifeYearSkills: StoreTypes.LifeYearSkillList,
    skillKeys: StoreTypes.SkillKey[],
}

interface ConnectedDispatch {
    addHandler: Function,
    updateHandler: Function,
}

interface OwnProps {}

export const LifeYearSkillList = (props: ConnectedState & ConnectedDispatch & OwnProps) => (
    <div>
        <button onClick={() => props.addHandler()}>ADD SKILL</button>
        <ul>
            {
                props.lifeYearSkills.map((lifeYearSkill: StoreTypes.LifeYearSkill) => <LifeYearSkill
                    skill={lifeYearSkill}
                    key={lifeYearSkill.id as any}
                    skillKeys={props.skillKeys}
                    updateHandler={(skillKey: StoreTypes.SkillKey, value: StoreTypes.SkillValue) => props.updateHandler(lifeYearSkill.id, skillKey, value)}
                />)
            }
        </ul>
    </div>
);