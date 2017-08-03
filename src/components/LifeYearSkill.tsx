import * as React from "react";
import {StoreTypes} from "../store/index";

interface ConnectedState {
    skill: StoreTypes.LifeYearSkill,
    skillKeys: StoreTypes.SkillKey[],
}

interface ConnectedDispatch {
    updateHandler: (key: StoreTypes.SkillKey, value: StoreTypes.SkillValue) => void,
}

interface OwnProps {}

interface OwnState {}

export class LifeYearSkill extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
    render() {
        let skillTypeSelect: HTMLSelectElement;
        let valueInput: HTMLInputElement;

        const lifeYearSkill: StoreTypes.LifeYearSkill = this.props.skill;
        const skillKeys: StoreTypes.SkillKey[] = this.props.skillKeys;
        const updateHandler: Function = this.props.updateHandler;
        const currentSkillKey: StoreTypes.SkillKey = lifeYearSkill.key;
        const currentSkillValue: StoreTypes.SkillValue = lifeYearSkill.value;
        const onUpdateActivity = () => updateHandler(skillTypeSelect.value, parseFloat(valueInput.value));
        return (
            <li>
                <select
                    ref={(node) => {skillTypeSelect = node}}
                    value={currentSkillKey as any as string}
                    onChange={onUpdateActivity}
                >
                    <option key="" value="" disabled={true}>select skill</option>
                    {
                        skillKeys.map((skillKey: StoreTypes.SkillKey) => {
                            const skillKeyString: string = skillKey as any;
                            return <option key={skillKeyString} value={skillKeyString}>{skillKeyString}</option>
                        })
                    }
                </select>
                <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    ref={(node) => {valueInput = node}}
                    value={currentSkillValue as any}
                    onChange={onUpdateActivity}
                />
            </li>
        );
    }
}