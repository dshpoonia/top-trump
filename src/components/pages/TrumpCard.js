import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red, teal } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {useEffect, useState} from "react";

const TrumpCard = ({props}) => {

    const [data, setData] = useState(props);

    useEffect(() => {
        setData(props);
    },[props]);

  return (
    <Card sx={{ maxWidth: 345, bgcolor: data.cardBackground}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.avatarHeader}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TrumpCard;
