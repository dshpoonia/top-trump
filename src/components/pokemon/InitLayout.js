import React, {Component, useEffect, useState} from "react";

import PlayerPokemon from "./PlayerPokemon";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import PlayerCard from "../pages/PlayerCard";
import {initPlayer} from "../../actions/player-actions";

class InitLayout extends Component {


    render() {

        let playerCards = [];
        let playerCardMap = this.props.player.playerMap;

        playerCardMap.forEach((p, pId) => playerCards.push(
            <Grid key={pId + "cards"} id="player-layout-grid" item xs={3}>
                <PlayerPokemon p={p}/>
            </Grid>
        ));

        let players = [];

        playerCardMap.forEach((p, pId) => players.push(
            <Grid key={pId + "player"} id="player-info-grid" item xs={3}>
                <PlayerCard p={p}/>
            </Grid>
        ));

        return (
            <Grid id="init-layout-container" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {playerCards}

                <Grid item xs={2}>
                </Grid>

                {players}

            </Grid>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    initPlayer
};

export default connect(mapStateToProps, mapDispatchToProps)(InitLayout);

