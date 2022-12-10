import React, {useEffect} from "react";

import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import pokemonImg from "../../static/images/player/pokemon.jpeg";
import {styled} from "@mui/material/styles";
import BounceTrumpCard from "../pages/BounceTrumpCard";
import {loadPokemon} from "../../actions/pokemon-actions";
import {hideOtherPlayerCards} from "../../actions/player-actions";

const PlayerPokemon = (props) => {

    useEffect(() => {
        props.loadPokemon({player: props.p});

        if(props.p.id == props.player.playerTurn){
            props.hideOtherPlayerCards();
        }

    }, [props.p.cards.length])

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    let shouldDisplay = false;
    if (props.player.playerTurn == props.p.id && props.player.trumpLoaded) {
        shouldDisplay = true;
    } else if (props.player.checkTrump.showOtherPlayerCards) {
        shouldDisplay = true;
    }

    return (
        <Grid>
            {shouldDisplay && <BounceTrumpCard p={props.p}/>}
            {!shouldDisplay && <Card> <Img alt="pokemon" src={pokemonImg}/> </Card>}

        </Grid>
    );

}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    loadPokemon,
    hideOtherPlayerCards
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPokemon);
