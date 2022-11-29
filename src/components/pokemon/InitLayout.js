import React, {useEffect, useState} from "react";

import PlayerPokemon from "./PlayerPokemon";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import PlayerCard from "../pages/PlayerCard";
import {initPlayer} from "../../actions/player-actions";

const InitLayout = (props) => {

    console.log("InitLayout props", props);
    let playerCardMap = new Map(Object.entries(props.player));
    let playerCards = [];

    playerCardMap.forEach((pId, p) => playerCards.push(
        <>
            <Grid key={pId + "cards"} item xs={2}>
            </Grid>
            <Grid key={pId + "cards-space"} id="player-layout-grid" item xs={3}>
                <PlayerPokemon key={pId + "player-pokemon"} id={1}
                               playerId={pId}/>
            </Grid>

        </>
    ));

    let playerMap = new Map(Object.entries(props.player));
    let players = [];

    playerMap.forEach((pId, p) => players.push(
        <>
            <Grid key={pId + "player"} id="player-info-grid" item xs={3}>
                <PlayerCard key={pId + "player"} playerId={pId}/>
            </Grid>
            <Grid key={pId + "player-space"} item xs={2}>
            </Grid>

        </>
    ));

    return (
        <Grid id="init-layout-container" container columns={12} alignItems="center">

            {playerCards}

            <Grid item xs={2}>
            </Grid>

            {players}

        </Grid>
    );
};

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    initPlayer
};

export default connect(mapStateToProps, mapDispatchToProps)(InitLayout);

