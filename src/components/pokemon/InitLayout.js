import React, {Component} from "react";

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
            <Grid key={pId + "cards"} xm={6} xs={6}>
                <Grid  container xm={7} xs={11} direction="column">
                    <PlayerPokemon p={p}/>
                    <PlayerCard p={p}/>
                </Grid>
            </Grid>
        ));

        return (
            <Grid container>
                {playerCards}
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

