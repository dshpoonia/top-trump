import React, {useEffect} from "react";

import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import pokemonImg from "../../static/images/player/pokemon.jpeg";
import {styled} from "@mui/material/styles";
import BounceTrumpCard from "../pages/BounceTrumpCard";
import {loadPokemon} from "../../actions/pokemon-actions";
import {GameStatus} from "../../reducers/gameReducer";

const PlayerPokemon = (props) => {

    useEffect(() => {
        props.loadPokemon({player: props.p, gameStatus: props.game.status});

    }, [props.p.cards.length])

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    let shouldDisplay;
    if(props.game.status === GameStatus.DISPLAYING_RESULTS){
        shouldDisplay = true;
    }else{
        shouldDisplay = props.player.playerTurn === props.p.id;
    }

    return (
        <>
            {shouldDisplay && <BounceTrumpCard p={props.p}/>}
            {!shouldDisplay && <Card> <Img alt="pokemon" src={pokemonImg}/> </Card>}

        </>
    );

}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    loadPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPokemon);
