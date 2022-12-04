import React, {Component, useEffect, useState} from "react";

import {blue, brown, green, grey, pink, purple, red, teal, yellow} from "@mui/material/colors";
import TrumpCard from "../pages/TrumpCard";
import {loadTrump} from "../../actions/player-actions";
import {connect} from "react-redux";
import {capitalizeFirstLetter, getBackgroundColor} from "../../services/pokemonOperations";

class PlayerPokemon extends Component {

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.props.p.cards[0];
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
                    activeTrump.image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.props.p.cards[0]+".png"
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

                                this.props.loadTrump({p: this.props.p.id, activeTrump: activeTrump})
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
    }

    render() {


        return (
            <div>
                <TrumpCard p={this.props.p}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    loadTrump
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPokemon);
