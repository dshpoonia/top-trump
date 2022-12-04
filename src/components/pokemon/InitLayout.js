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
            <div key={pId + "cards"}>
                <Grid item xs={2}>
                </Grid>
                <Grid id="player-layout-grid" item xs={3}>
                    <PlayerPokemon p={p}/>
                </Grid>

            </div>
        ));

        let players = [];

        playerCardMap.forEach((p, pId) => players.push(
            <div key={pId + "player"}>
                <Grid id="player-info-grid" item xs={3}>
                    <PlayerCard p={p}/>
                </Grid>
                <Grid item xs={2}>
                </Grid>

            </div>
        ));

        return (
            <Grid id="init-layout-container" container columns={12} alignItems="center">

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

