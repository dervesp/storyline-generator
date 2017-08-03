import {connect} from "react-redux";
import * as redux from 'redux'
import {getLifeYearSkills} from "../reducers/lifeYearSkills";
import {StoreTypes} from "../store/index";
import {AddLifeYearSkill, UpdateLifeYearSkill} from "../actions/index";
import {LifeYearSkillList} from "./LifeYearSkillList";

interface OwnProps {
    lifeYearId: StoreTypes.LifeYearId,
    lifeYearSkillIds: StoreTypes.LifeYearSkillId[],
}

interface StateProps  {
    lifeYearSkills: StoreTypes.LifeYearSkill[],
    skillKeys: StoreTypes.SkillKey[],
}

interface DispatchProps {
    addHandler: Function,
    updateHandler: Function,
}

function mapStateToProps(state: StoreTypes.All, ownProps: OwnProps): StateProps {
    return {
        lifeYearSkills: getLifeYearSkills(state.entities.lifeYearSkills, ownProps.lifeYearSkillIds),
        skillKeys: [
            "key1" as any,
            "key2" as any,
            "key3" as any,
        ],
    }
}

function mapDispatchToProps(dispatch: redux.Dispatch<StoreTypes.All>, ownProps: OwnProps): DispatchProps {
    const lifeYearId: StoreTypes.LifeYearId = ownProps.lifeYearId;

    return {
        addHandler: () => dispatch(AddLifeYearSkill(lifeYearId)),
        updateHandler: (lifeYearSkillId: StoreTypes.LifeYearSkillId, skillKey: StoreTypes.SkillKey, value: StoreTypes.SkillValue) =>
            dispatch(UpdateLifeYearSkill(lifeYearSkillId, skillKey, value)),
    }
}

export const LifeYearSkillListContainer: React.ComponentClass<OwnProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)(LifeYearSkillList);
