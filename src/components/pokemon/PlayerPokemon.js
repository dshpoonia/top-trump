import React, {useEffect, useState} from "react";

import {teal} from "@mui/material/colors";
import PlayerPokemonDetails from "./PlayerPokemonDetails";

const PlayerPokemon = ({id}) => {

    const [playerPokemon, setPlayerPokemon] = useState({});
    const [loaded, setLoaded] = useState(false);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/" + id;
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    var pokemon = result;
                    pokemon.image = result.sprites.other.home.front_default;
                    pokemon.title = result.name.toUpperCase();
                    pokemon.avatarHeader = result.name.toUpperCase()[0];
                    pokemon.subheader = capitalizeFirstLetter(result.types[0].type.name);
                    pokemon.attributes = [];

                    let s = {};
                    s.name = "Height";
                    s.value = result.height;
                    pokemon.attributes.push(s);

                    s = {};
                    s.name = "Weight";
                    s.value = result.weight;
                    pokemon.attributes.push(s);

                    result.stats.forEach(function (stat) {

                        if (stat.stat.name.indexOf("special") == -1) {
                            s = {};
                            s.name = capitalizeFirstLetter(stat.stat.name);
                            s.value = stat.base_stat;
                            pokemon.attributes.push(s);
                        }
                    }, result.attributes);

                    setPlayerPokemon(pokemon);
                    setLoaded(true);

                },
                (error) => {
                    console.log("error");
                }
            );
    }, []);

    return (
        <div>
            {loaded &&
                <PlayerPokemonDetails pokemon={playerPokemon}/>
            }
        </div>
    );
};

export default PlayerPokemon;
