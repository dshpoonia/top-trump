import React, {Component} from "react";
import {connect} from "react-redux";
import InitGameHome from "../pages/InitGameHome";
import {GameMode} from "../../reducers/gameReducer";

class PokemonGameHome extends Component {

    render() {
        return (
            <>
            <InitGameHome mode={GameMode.POKEMON}/>
            </>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGameHome);