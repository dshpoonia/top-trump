import React, {useEffect, useState} from "react";
import TrumpCard from "../pages/TrumpCard";
import {pokemonData} from "../../variables/pokemon";


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
                    playerPokemon.cardBackground = res.color.name;
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
