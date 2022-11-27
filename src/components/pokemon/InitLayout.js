import React, {useEffect, useState} from "react";

import PlayerPokemon from "./PlayerPokemon";
import Grid from "@material-ui/core/Grid";
import Typography from "@mui/material/Typography";

const InitLayout = ({playerCardsMap}) => {

    console.log("player card map", playerCardsMap);
    const [payerTurn, setPlayerTurn] = useState("p1");
    const [attributeCheck, setAttributeCheck] = useState({});

    const onAttributeClick = (attributeName, attributeValue) =>{
        let a = {};
        a.attributeToCompare= attributeName;
        a.attributeValueToCompare = attributeValue;
        a.calculateResults = true;
        a.selectedByPlayer = "p1";
        setAttributeCheck(a);
    }

    const attributeCompareCallback = (playerId, compareResult) =>{

        if(compareResult < 0){
            alert("Player 1 lost");
        }
    }


    return (
        <Grid id="init-layout-container" container spacing={1} columns={12} alignItems="center">
            <Grid item xs={2}>
            </Grid>
            <Grid id="player-layout-grid" item xs={3} alignItems="flex-end">
                <PlayerPokemon id={6}
                               playerId = "p1"
                               onAttributeClick={onAttributeClick}/>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid id="bot-layout-grid" item xs={3} alignItems="flex-start">
                <PlayerPokemon id={8}
                               playerId = "b1"
                               attributeCheck={attributeCheck}
                               attributeCompareCallback={attributeCompareCallback}
                />
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
    );
};

export default InitLayout;
