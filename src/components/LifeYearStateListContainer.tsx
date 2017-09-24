import {connect} from "react-redux";
import * as redux from 'redux'
import {getLifeYearStates} from "../reducers/lifeYearStates";
import {StoreTypes} from "../store/index";
import {AddLifeYearState, UpdateLifeYearState} from "../actions/index";
import {LifeYearStateList} from "./LifeYearStateList";

interface OwnProps {
    lifeYearId: StoreTypes.LifeYearId,
    lifeYearStateIds: StoreTypes.LifeYearStateIdList,
}

interface StateProps  {
    lifeYearStates: StoreTypes.LifeYearStateList,
    stateKeys: StoreTypes.StateKey[],
}

interface DispatchProps {
    addHandler: Function,
    updateHandler: Function,
}

function mapStateToProps(state: StoreTypes.All, ownProps: OwnProps): StateProps {
    return {
        lifeYearStates: getLifeYearStates(state.entities.lifeYearStates, ownProps.lifeYearStateIds),
        stateKeys: [
            "StateKey_1" as any,
            "StateKey_2" as any,
            "StateKey_3" as any,
        ],
    }
}

function mapDispatchToProps(dispatch: redux.Dispatch<StoreTypes.All>, ownProps: OwnProps): DispatchProps {
    const lifeYearId: StoreTypes.LifeYearId = ownProps.lifeYearId;

    return {
        addHandler: () => dispatch(AddLifeYearState(lifeYearId)),
        updateHandler: (lifeYearStateId: StoreTypes.LifeYearStateId, stateKey: StoreTypes.StateKey, value: StoreTypes.StateValue) =>
            dispatch(UpdateLifeYearState(lifeYearStateId, stateKey, value)),
    }
}

export const LifeYearStateListContainer: React.ComponentClass<OwnProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)(LifeYearStateList);
