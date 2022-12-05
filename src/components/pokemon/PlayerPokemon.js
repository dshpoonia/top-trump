import React, {Component, useEffect} from "react";

import {teal} from "@mui/material/colors";
import TrumpCard from "../pages/TrumpCard";
import {finishLoadingTrump, initLoadingTrump, loadTrump} from "../../actions/player-actions";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {capitalizeFirstLetter, getBackgroundColor} from "../../services/pokemonOperations";
import pokemonImg from "../../static/images/player/pokemon.jpeg";
import {styled} from "@mui/material/styles";
import BounceTrumpCard from "../pages/BounceTrumpCard";

const PlayerPokemon = (props) => {

    useEffect(() => {
        props.initLoadingTrump({id: props.p.id, trumpLoaded: false});
        let url = "https://pokeapi.co/api/v2/pokemon/" + props.p.activePokemon;
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {

                    let activeTrump = {};

                    activeTrump.attributes = [];
                    activeTrump.isHidden = true;
                    activeTrump.background = teal[300];
                    activeTrump.avatarHeader = result.name.toUpperCase()[0];
                    activeTrump.header = result.name.toUpperCase();
                    activeTrump.subheader = capitalizeFirstLetter(result.types[0].type.name);
                    //activeTrump.image = result.sprites.other.home.front_default;
                    activeTrump.image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + props.p.cards[0] + ".png"
                    activeTrump.cardContent = ""

                    activeTrump.attributes.push({name: "Height", value: result.height});
                    activeTrump.attributes.push({name: "Weight", value: result.weight});


                    result.stats.forEach(function (stat) {

                        if (stat.stat.name.indexOf("special") == -1) {
                            let s = {};
                            s.name = capitalizeFirstLetter(stat.stat.name);
                            s.value = stat.base_stat;
                            activeTrump.attributes.push(s);
                        }
                    }, result.attributes);


                    fetch(result.species.url)
                        .then((res) => res.json())
                        .then(
                            (res) => {
                                let lang = res.flavor_text_entries.filter((e) => {
                                    return e.language.name == "en";
                                });
                                activeTrump.cardContent = lang[0].flavor_text;
                                activeTrump.cardBackground = getBackgroundColor(res.color.name);

                                activeTrump.isHidden = false;

                                props.loadTrump({p: props.p.id, activeTrump: activeTrump})
                                props.finishLoadingTrump({id: props.p.id, trumpLoaded: true});
                            },
                            (error) => {
                                console.log("Error fetching pokemon extra details");
                            }
                        );

                },
                (error) => {
                    console.log("Error fetching pokemon details", error);
                }
            );
    }, [props.p.activePokemon])

    console.log("Active pokemon ", props.p.cards[0]);
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    let shouldDisplay = false;
    if (props.player.playerTurn == props.p.id) {
        shouldDisplay = true;
    } else if (props.player.checkTrump.showOtherPlayerCards) {
        shouldDisplay = true;
    }

    return (
        <Grid>
            {shouldDisplay && <BounceTrumpCard p={props.p}/>}
            {!shouldDisplay && <Card> <Img alt="pokemon" src={pokemonImg}/> </Card>}

        </Grid>
    );

}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    loadTrump,
    initLoadingTrump,
    finishLoadingTrump
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPokemon);
