import React, {Component} from "react";
import Srand from "seeded-rand";
import InitLayout from "../pokemon/InitLayout";
import {initPlayer} from "../../actions/player-actions";
import {connect} from "react-redux";
import {teal} from "@mui/material/colors";
import {getMasterPokemonIndex} from "../../services/pokemonOperations";

class InitPlayers extends Component {

    componentDidMount()  {
        let playerMap = new Map();
        let arr = getMasterPokemonIndex();
        const rnd = new Srand();
        arr = rnd.shuffle(arr);

        for (let i = 1; i <= this.props.game.noOfPlayers; i++) {
            let cards = rnd.choices(arr, this.props.game.deckSize);
            let p = {
                id: "p" + i,
                name: "Player" + 1,
                cards: cards,
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
            let cards = rnd.sample(arr, this.props.game.deckSize);
            let b = {
                id: "b" + i,
                name: "Bot" + i,
                cards: cards,
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
                winningPlayer: "",
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

