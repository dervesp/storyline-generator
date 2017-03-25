import {connect} from "react-redux";
import * as actions from "../actions/Actions";
import {getLifeYears} from "../reducers/lifeYears";
import LifeYears from "./LifeYears";

function mapStateToProps (state) {
    return {
        lifeYears: getLifeYears(state.entities.lifeYears),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addLifeYearHandler: () => dispatch(actions.addLifeYear())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LifeYears);