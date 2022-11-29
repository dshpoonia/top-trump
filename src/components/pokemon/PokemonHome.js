import React, {useEffect} from "react";
import { connect } from "react-redux";
import InitPlayers from "./InitPlayers";
import {initGame} from "../../actions/game-actions";

const PokemonHome = (props) => {

    useEffect( () => {
        props.initGame({
            deckSize: 20,
            noOfBotPlayers: 1,
            noOfPlayers: 1,
            initialized: true

        })
    },[])
    return (
        <div>
            {props.game.initialized && <InitPlayers/>}
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return { ...state, ...props };
};

const mapDispatchToProps = {
    initGame
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHome);