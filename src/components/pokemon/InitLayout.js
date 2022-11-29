import React, {useEffect, useState} from "react";

import PlayerPokemon from "./PlayerPokemon";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import PlayerCard from "../pages/PlayerCard";
import {initPlayer} from "../../actions/player-actions";

const InitLayout = (props) => {

    console.log("InitLayout props", props);
    let playerMap = new Map(Object.entries(props.player));
    let playerCards = [];

    playerMap.forEach((pId, p) => playerCards.push(
        <>
            <Grid key={pId} item xs={2}>
            </Grid>
            <Grid id="player-layout-grid" item xs={3}>
                <PlayerPokemon id={1}
                               playerId={pId}/>
            </Grid>

        </>
    ));


    return (
        <Grid id="init-layout-container" container columns={12} alignItems="center">

            {playerCards}

            <Grid item xs={2}>
            </Grid>


            <Grid id="player-info-grid" item xs={3}>
                <PlayerCard playerId="p1"/>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid id="bot-info-grid" item xs={3}>
                <PlayerCard playerId="b1"/>
            </Grid>
            <Grid item xs={2}>
            </Grid>

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

