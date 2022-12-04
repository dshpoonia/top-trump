import React, {Component, useEffect} from "react";
import {connect} from "react-redux";
import InitPlayers from "./InitPlayers";
import {initGame} from "../../actions/game-actions";
import Container from '@mui/material/Container';

class PokemonHome extends Component {


    componentDidMount() {
        this.props.initGame({
            deckSize: 20,
            noOfBotPlayers: 1,
            noOfPlayers: 1,
            initialized: true

        })
    }

    render() {
        return (
            <Container>
                {this.props.game.initialized && <InitPlayers/>}
            </Container>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    initGame
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHome);