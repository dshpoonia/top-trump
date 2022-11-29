import React, {useEffect} from "react";
import Srand from "seeded-rand";
import InitLayout from "./InitLayout";
import Grid from "@material-ui/core/Grid";
import {initPlayer} from "../../actions/player-actions";
import {connect} from "react-redux";
import {teal} from "@mui/material/colors";
import {getMasterPokemonIndex} from "../../services/pokemonOperations";

const InitPlayers = (props) => {

    useEffect(() => {
        let playerMap = new Map();
        let arr = getMasterPokemonIndex();
        const rnd = new Srand(arr.length);

        for (let i = 1; i <= props.game.noOfPlayers; i++) {
            let p = {
                id: "p"+i,
                name: "Player"+1,
                cards: rnd.sample(arr, props.game.deckSize),
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

            playerMap.set("p"+i, p);
        }

        for (let i = 1; i <= props.game.noOfBotPlayers; i++) {
            let b = {
                id: "b"+i,
                name: "Bot"+i,
                cards: rnd.sample(arr, props.game.deckSize),
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

            playerMap.set("b"+i, b);

        }

       props.initPlayer(playerMap);

    }, [])


    return (
        <Grid container>
            <InitLayout/>
        </Grid>
    );
};

const mapStateToProps = (state, props) => {
    return { ...state, ...props };
};

const mapDispatchToProps = {
    initPlayer,
};
export default connect(mapStateToProps, mapDispatchToProps)(InitPlayers);

