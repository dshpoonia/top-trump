import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Grid from "@material-ui/core/Grid";
import {playTrump} from "../../actions/player-actions";
import {connect} from "react-redux";

const TrumpCard = (props)  => {

    const [selectedAttribute, setSelectedAttribute] = React.useState("");
        const handleListItemClick = (attribute) => {
            if (props.p.id === props.player.playerTurn) {
                props.playTrump({
                    pId: props.p.id,
                    attributeNameClicked: attribute.name,
                    attributeValueClicked: attribute.value
                })
                setSelectedAttribute(attribute.name);
            }
        };

        const trump = props.p.activeTrump;
        const listItems =
            <List aria-label="stats-buttons">
                <Grid container columns={12}>
                    {
                        trump.attributes.map(attribute => (

                            <Grid key={props.p.id + attribute.name} item xs={6}>

                                <ListItem
                                    button={props.p.id === props.player.playerTurn}
                                    onClick={() => handleListItemClick(attribute)}
                                    selected={selectedAttribute === attribute.name}>
                                    <Grid container columns={12}>
                                        <Grid item xs={8}>
                                            <ListItemText primary={attribute.name}/>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItemText primary={attribute.value}/>
                                        </Grid>
                                    </Grid>
                                </ListItem>

                            </Grid>


                        ))
                    }
                </Grid>
            </List>

        return (
            <>
                {props.p &&
                    <Card sx={{bgcolor: trump.cardBackground}}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{bgcolor: red[500]}} aria-label="avatar">
                                    {trump.avatarHeader}
                                </Avatar>
                            }
                            title={<Typography variant="h6">{trump.title}</Typography>}
                            subheader={trump.subheader}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={trump.image}
                            alt={trump.name}
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {trump.cardContent}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {listItems}
                        </CardActions>
                    </Card>
                }
            </>
        );
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    playTrump
};

export default connect(mapStateToProps, mapDispatchToProps)(TrumpCard);
