import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {teal} from "@mui/material/colors";
import userImg from '../../static/images/player/user.png'
import botImg from '../../static/images/player/bot.png'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const PlayerCard = ({playerId, playerCardsMap})  => {

    const [playerInfo, setPlayerInfo] = useState(playerCardsMap);

    useEffect(() => {
        setPlayerInfo(playerCardsMap[playerId]);
    }, [playerCardsMap])

    return (
        <Paper sx={{bgcolor: teal[300]}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ButtonBase >
                        {playerId == "b1" && <Img alt="user" src={botImg} />}
                        {playerId != "b1" && <Img alt="user" src={userImg} />}
                    </ButtonBase>
                </Grid>
                <Grid item xs={5} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {playerInfo.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: {playerId}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant="subtitle1" component="div">
                                    Cards
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    {playerInfo.cards && playerInfo.cards.length}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
