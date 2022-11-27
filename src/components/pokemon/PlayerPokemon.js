import React, {useEffect, useState} from "react";

import {teal} from "@mui/material/colors";
import PlayerPokemonDetails from "./PlayerPokemonDetails";

const PlayerPokemon = ({id}) => {

    const [playerPokemon, setPlayerPokemon] = useState({});
    const [loaded, setLoaded] = useState(false);

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
                    pokemon.subheader = result.types[0].type.name;
                    pokemon.attributes = [];
                    pokemon.cardBackground = teal[300];
                    pokemon.cardContent = "ABC";

                    let s = {};
                    s.name = "height";
                    s.value = result.height;
                    s.action = () => {
                        alert("height");
                    };
                    pokemon.attributes.push(s);

                    s = {};
                    s.name = "weight";
                    s.value = result.weight;
                    s.action = () => {
                        alert("weight");
                    };
                    pokemon.attributes.push(s);

                    result.stats.forEach(function (stat) {

                        if (stat.stat.name.indexOf("special") == -1) {
                            s = {};
                            s.name = stat.stat.name;
                            s.value = stat.base_stat;
                            s.action = () => {
                                alert(stat.stat.name);
                            };
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
