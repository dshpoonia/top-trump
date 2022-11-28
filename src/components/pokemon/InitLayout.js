import React from "react";

import PlayerPokemon from "./PlayerPokemon";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import PlayerCard from "../pages/PlayerCard";

const InitLayout = (state, props) => {

    const attributeCompareCallback = (playerId, compareResult) =>{

        let winnerPlayer = "";
        let losingPlayer = "";

        if(compareResult < 0){
            winnerPlayer = playerId;
        }else{
            losingPlayer = playerId;
        }

        //let cardsToMoveBack = playerCards[winnerPlayer].cards[0];
        //let cardsToBeTransferred = playerCards[losingPlayer].cards[0];

        //playerCards[winnerPlayer].cards.splice(0, 1);
        //playerCards[losingPlayer].cards.splice(0, 1);
        //playerCards[winnerPlayer].cards.push(cardsToMoveBack);
        //playerCards[winnerPlayer].cards.push(cardsToBeTransferred);

        //setPlayerCards(playerCards);

    }


    return (
        <Grid id="init-layout-container" container columns={12} alignItems="center">
            <Grid item xs={2}>
            </Grid>
            <Grid id="player-layout-grid" item xs={3} >
                <PlayerPokemon id={state.player["p1"].cards[0]}
                               playerId = "p1"
                               onAttributeClick={()=>{}}/>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid id="bot-layout-grid" item xs={3} >
                <PlayerPokemon id={state.player["b1"].cards[0]}
                               playerId = "b1"
                               attributeCheck={()=>{}}
                               attributeCompareCallback={attributeCompareCallback}
                />
            </Grid>
            <Grid item xs={2}>
            </Grid>

            <Grid item xs={2}>
            </Grid>


            <Grid id="player-info-grid" item xs={3} >
                <PlayerCard playerId = "p1"/>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid id="bot-info-grid" item xs={3} >
                <PlayerCard playerId = "b1"/>
            </Grid>
            <Grid item xs={2}>
            </Grid>

        </Grid>
    );
};

const mapStateToProps = (state, props) => {
    return { ...state, ...props };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(InitLayout);

