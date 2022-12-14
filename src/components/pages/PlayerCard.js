import * as React from 'react';
import Typography from '@mui/material/Typography';
import {green, red, teal} from "@mui/material/colors";
import userImg from '../../static/images/player/user.png'
import botImg from '../../static/images/player/bot.png'

import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ButtonBase from '@mui/material/ButtonBase';
import {connect} from "react-redux";
import {initPlayer} from "../../actions/player-actions";
import {useEffect} from "react";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const PlayerCard = (props) => {

    useEffect(() => {
    }, [])
    let bgcolor = teal[300];
    if (!props.player.checkTrump.winningPlayer == "") {
        if (props.p.id === props.player.checkTrump.winningPlayer) {
            bgcolor = green[300];
        } else {
            bgcolor = red[300];
        }
    }

    const playerInfo = props.p;
    return (
        <Paper sx={{bgcolor: bgcolor}}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm container>

                    <Grid item xs={6}>
                        <ButtonBase>
                            {playerInfo.id === "b1" && <Img alt="user" src={botImg}/>}
                            {playerInfo.id !== "b1" && <Img alt="user" src={userImg}/>}
                        </ButtonBase>
                    </Grid>

                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant="subtitle1" component="div">
                                    Cards
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    {playerInfo.cards && playerInfo.cards.length}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {playerInfo.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: {playerInfo.id}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    initPlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
