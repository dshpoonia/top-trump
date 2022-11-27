import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {blue, red, teal} from "@mui/material/colors";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";

const TrumpCard = ({props, onAttributeClick}) => {

    const [data, setData] = useState(props);

    useEffect(()=>{
        setData(props)
    }, [props])

    const listItems =
        <List aria-label="stats-buttons">
            <Grid container spacing={2} columns={12}>
                {
                    props.attributes.map(attribute => (

                        <Grid item xs={6}>

                            <ListItem button onClick={() => {
                                onAttributeClick(attribute.name, attribute.value)
                            }}>
                                <Grid container spacing={2} columns={12}>
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


    useEffect(() => {
        setData(props);
    }, [props]);

    return (
        <Card sx={{bgcolor: data.cardBackground}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="avatar">
                        {data.avatarHeader}
                    </Avatar>
                }
                title={<Typography variant="h6">{data.title}</Typography>}
                subheader={data.subheader}
            />
            <CardMedia
                component="img"
                height="194"
                image={data.image}
                alt={data.name}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.cardContent}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {listItems}
            </CardActions>
        </Card>
    );
};

export default TrumpCard;
