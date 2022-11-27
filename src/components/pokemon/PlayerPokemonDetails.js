import React, {useEffect, useState} from "react";
import TrumpCard from "../pages/TrumpCard";
import {pokemonData} from "../../variables/pokemon";
import {red, grey, blue, brown, green, pink, purple, yellow, teal,} from "@mui/material/colors";


const PlayerPokemonDetails = ({pokemon}) => {

    const [playerPokemon, setPlayerPokemon] = useState(pokemon);
    const [loaded, setLoaded] = useState(false);

    console.log("pokemon ", pokemon);
    useEffect(() => {

        fetch(pokemon.species.url)
            .then((res) => res.json())
            .then(
                (res) => {
                    let lang = res.flavor_text_entries.filter((e) => {
                        return e.language.name == "en";
                    });
                    playerPokemon.cardContent = lang[0].flavor_text;
                    playerPokemon.cardBackground = teal[300];
                    if (res.color.name == 'red') {
                        playerPokemon.cardBackground = red[300];
                    }
                    if (res.color.name == 'black' || res.color.name == 'gray') {
                        playerPokemon.cardBackground = grey[300];
                    }
                    if (res.color.name == 'blue') {
                        playerPokemon.cardBackground = blue[300];
                    }
                    if (res.color.name == 'brown') {
                        playerPokemon.cardBackground = brown[300];
                    }
                    if (res.color.name == 'green') {
                        playerPokemon.cardBackground = green[300];
                    }
                    if (res.color.name == 'pink') {
                        playerPokemon.cardBackground = pink[300];
                    }
                    if (res.color.name == 'purple') {
                        playerPokemon.cardBackground = purple[300];
                    }
                    if (res.color.name == 'yellow') {
                        playerPokemon.cardBackground = yellow[300];
                    }
                    setPlayerPokemon(playerPokemon);
                    setLoaded(true);
                },
                (error) => {
                    console.log("error");
                }
            );

    }, [pokemon]);

    return (
        <div>
            {loaded &&
                <TrumpCard props={playerPokemon}/>
            }

        </div>
    );
};

export default PlayerPokemonDetails;
