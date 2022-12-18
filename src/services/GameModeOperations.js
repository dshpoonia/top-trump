import {GameMode} from "../reducers/gameReducer";
import {getPokemonTrumps} from "./PokemonOperations";

export const getTrumpCardsForGamePlay = (gameMode) =>{

    if(gameMode === GameMode.POKEMON){
        return getPokemonTrumps();
    }
    var arr = [];
    for (let i = 1; i < 650; i++) {
        arr.push(i);
    }

    return arr;
}