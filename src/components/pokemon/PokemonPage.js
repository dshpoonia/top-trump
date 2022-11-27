import React, { useEffect, useState } from "react";
import TrumpCard from "../pages/TrumpCard";
import Srand from "seeded-rand";
import { pokemonData } from "../../variables/pokemon";

const PokemonPage = () => {
  const rnd = new Srand(649);

  var arr = [];
  for (let i = 1; i < 650; i++) {
    arr.push(i);
  }

  var player1 = rnd.sample(arr, 30);
  var player2 = rnd.sample(arr, 30);

  console.log(player1);
  const [playerOnePokemon, setPlayerOnePokemon] = useState(pokemonData);
  const [computerPokemon, setComputerPokemon] = useState(pokemonData);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + player1[2];
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          result.image = result.sprites.other.home.front_default;
          result.title = result.name.toUpperCase();
          result.avatarHeader = result.title[0];
          result.subheader = result.types[0].type.name;
          result.attributes = [];

          result.stats.forEach(function (stat) {
            let s = {};
            s.name = "height";
            s.value = pokemonData.height;
            s.action = () => {
              alert("height");
            };

            result.attributes.push(s);

            s = {};
            s.name = "weight";
            s.value = pokemonData.weight;
            s.action = () => {
              alert("weight");
            };
            result.attributes.push(s);

            s = {};

            if (stat.stat.name.indexOf("special") == -1) {
              s.name = stat.stat.name;
              s.value = stat.base_stat;
              s.action = () => {
                alert(stat.stat.name);
              };
              result.attributes.push(s);
              s = {};
            }
          }, result.attributes);

          fetch(result.species.url)
            .then((res) => res.json())
            .then(
              (res) => {
                let lang = res.flavor_text_entries.filter((e) => {
                  return e.language.name == "en";
                });
                result.cardContent = lang[0].flavor_text;
                result.cardBackground = res.color.name;
                setPlayerOnePokemon(result);
              },
              (error) => {
                setDesc("Error loading desc");
              }
            );

          setPlayerOnePokemon(result);
        },
        (error) => {
          setDesc("Error loading desc");
        }
      );
  }, []);

  return (
    <div>
      <TrumpCard data={playerOnePokemon} />
    </div>
  );
};

export default PokemonPage;
