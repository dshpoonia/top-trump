import React, {Component} from "react";
import {connect} from "react-redux";
import InitGameHome from "../pages/InitGameHome";
import {GameMode} from "../../reducers/gameReducer";

class CricketGameHome extends Component {

    render() {
        return (
            <>
            <InitGameHome mode={GameMode.CRICKET}/>
            </>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CricketGameHome);