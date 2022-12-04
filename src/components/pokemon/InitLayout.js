import React, {useEffect, useState} from "react";

import PlayerPokemon from "./PlayerPokemon";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import PlayerCard from "../pages/PlayerCard";
import {initPlayer} from "../../actions/player-actions";

const InitLayout = (props) => {

    const [playerCards, setPlayerCards] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        let playerCards = [];
        let playerCardMap = new Map(Object.entries(props.player.playerMap));

        playerCardMap.forEach((p, pId) =>{
            console.log("player card entry ", pId, p);
        })
            playerCardMap.forEach((pId, p) => playerCards.push(
            <div key={pId + "cards"}>
                <Grid item xs={2}>
                </Grid>
                <Grid id="player-layout-grid" item xs={3}>
                    <PlayerPokemon id={1}
                                   playerId={pId}/>
                </Grid>

            </div>
        ));
        setPlayerCards([]);

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

        setPlayers(players);
    }, [props.player])

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
    console.log("InitLayout mapStateToProps", state, props)
    return {
        player: state.player
    };
};

const mapDispatchToProps = {
    initPlayer
};

export default connect(mapStateToProps, mapDispatchToProps)(InitLayout);

