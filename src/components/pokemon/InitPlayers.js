import React, {useEffect, useState} from "react";
import Srand from "seeded-rand";
import {defaultPlayerCardMap} from "../../variables/playerCards";
import {getMasterPokemonIndex} from "./MasterPokemonIndex";
import InitLayout from "./InitLayout";

const InitPlayers = ({noOfPlayers, noOfBotPlayers, deckSize}) => {

    const [playerCardsMap, setPlayerCardsMap] = useState(defaultPlayerCardMap);

    useEffect(() => {
        var playerCardMap = defaultPlayerCardMap;
        var arr = getMasterPokemonIndex();
        const rnd = new Srand(arr.length);

        for (let i = 1; i <= noOfPlayers; i++) {
            playerCardMap[i].cards = rnd.sample(arr, deckSize);
        }

        for (let i = 1; i <= noOfBotPlayers; i++) {
            playerCardMap["b" + i].cards = rnd.sample(arr, deckSize);
        }

        setPlayerCardsMap(playerCardMap);

    }, [])


    return (
        <div>
            <InitLayout playerCardsMap={playerCardsMap}/>
        </div>
    );
};

export default InitPlayers;
