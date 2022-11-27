import React, {useEffect, useState} from "react";
import InitPlayers from "./InitPlayers";

const PokemonHome = () => {
    return (
        <div>
            <InitPlayers noOfPlayers={1} noOfBotPlayers={1} deckSize={30} />
        </div>
    );
};

export default PokemonHome;
