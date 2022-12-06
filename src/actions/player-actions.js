import {teal} from "@mui/material/colors";
import {capitalizeFirstLetter, getBackgroundColor} from "../services/pokemonOperations";

export const INIT_PLAYER = "INIT_PLAYER";
export const LOAD_TRUMP = "LOAD_TRUMP";
export const PLAY_TRUMP = "PLAY_TRUMP";

export const INIT_LOADING_TRUMP = "INIT_LOADING_TRUMP";
export const FINISH_LOADING_TRUMP = "FINISH_LOADING_TRUMP";

export function initLoadingTrump(loadingTrump){
    return dispatch => {
        dispatch({
            type: INIT_LOADING_TRUMP,
            payload: loadingTrump
        })
    };
}

export function loadPokemon(payload){
    return dispatch => {

        let trumpLoadingPayload = {id: payload.player.id, trumpLoaded: false}
        dispatch({
            type: INIT_LOADING_TRUMP,
            payload: trumpLoadingPayload
        })

        let url = "https://pokeapi.co/api/v2/pokemon/" + payload.player.cards[0];
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
                    activeTrump.image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + payload.player.cards[0] + ".png"
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

                                dispatch({
                                    type: LOAD_TRUMP,
                                    payload: {p: payload.player.id, activeTrump: activeTrump}
                                })

                                dispatch({
                                    type: FINISH_LOADING_TRUMP,
                                    payload: {id: payload.player.id, trumpLoaded: true}
                                })

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

    };
}
export function finishLoadingTrump(loadingTrump){
    return dispatch => {
        dispatch({
            type: FINISH_LOADING_TRUMP,
            payload: loadingTrump
        })
    };
}

export function initPlayer(player) {
    return dispatch => {
        dispatch({
            type: INIT_PLAYER,
            payload: player
        })
    };
}

export function loadTrump(trump) {
    return dispatch => {
        dispatch({
            type: LOAD_TRUMP,
            payload: trump
        })
    };
}

export function playTrump(attribute) {
    return dispatch => {
        dispatch({
            type: PLAY_TRUMP,
            payload: attribute
        })
    };
}