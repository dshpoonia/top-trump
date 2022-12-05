import React, {Component, useEffect} from "react";
import Srand from "seeded-rand";
import InitLayout from "./InitLayout";
import Grid from "@material-ui/core/Grid";
import {initPlayer} from "../../actions/player-actions";
import {connect} from "react-redux";
import {teal} from "@mui/material/colors";
import {getMasterPokemonIndex} from "../../services/pokemonOperations";

class InitPlayers extends Component {

    componentDidMount()  {
        let playerMap = new Map();
        let arr = getMasterPokemonIndex();
        const rnd = new Srand(arr.length);

        for (let i = 1; i <= this.props.game.noOfPlayers; i++) {
            let p = {
                id: "p" + i,
                name: "Player" + 1,
                cards: rnd.sample(arr, this.props.game.deckSize),
                activeTrump: {
                    attributes: [{name: "", value: ""}],
                    isHidden: false,
                    background: teal[300],
                    avatarHeader: "",
                    header: "",
                    subHeader: "",
                    image: "",
                    cardContent: ""
                }
            }

            playerMap.set("p" + i, p);
        }

        for (let i = 1; i <= this.props.game.noOfBotPlayers; i++) {
            let b = {
                id: "b" + i,
                name: "Bot" + i,
                cards: rnd.sample(arr, this.props.game.deckSize),
                activeTrump: {
                    attributes: [{name: "", value: ""}],
                    isHidden: true,
                    background: teal[300],
                    avatarHeader: "",
                    header: "",
                    subHeader: "",
                    image: "",
                    cardContent: ""
                }
            }

            playerMap.set("b" + i, b);

        }
        let player = {
            noOfPlayers: this.props.game.noOfPlayers + this.props.game.noOfBotPlayers,
            initialized: true,
            playerTurn: "p1",
            checkTrump: {
                winningPlayer: "p1",
                showOtherPlayerCards: false,
            },
            playerMap: playerMap
        }

        this.props.initPlayer(player);

    }


    render() {
        return (
            <>
                {this.props.player.initialized && <InitLayout/>}

            </>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    initPlayer,
};
export default connect(mapStateToProps, mapDispatchToProps)(InitPlayers);

