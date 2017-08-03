import {connect} from "react-redux";
import * as redux from 'redux'
import {getLifeYears} from "../reducers/lifeYears";
import {StoreTypes} from "../store/index";
import {AddLifeYear} from "../actions/index";
import {LifeYearList} from "./LifeYearList";

interface OwnProps {}

interface StateProps  {
    lifeYears: StoreTypes.LifeYear[],
}

interface DispatchProps {
    addHandler: Function,
}

function mapStateToProps(state: StoreTypes.All, ownProps: OwnProps): StateProps {
    return {
        lifeYears: getLifeYears(state.entities.lifeYears),
    }
}

function mapDispatchToProps(dispatch: redux.Dispatch<StoreTypes.All>, ownProps: OwnProps): DispatchProps {
    return {
        addHandler: () => dispatch(AddLifeYear()),
    }
}
export const LifeYearListContainer: React.ComponentClass<OwnProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)(LifeYearList);