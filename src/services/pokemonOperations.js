import {blue, brown, green, grey, pink, purple, red, teal, yellow} from "@mui/material/colors";

export const getMasterPokemonIndex = () =>{
    var arr = [];
    for (let i = 1; i < 650; i++) {
        arr.push(i);
    }

    return arr;
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getBackgroundColor = (color) => {
    if (color == 'red') {
        return red[300];
    }
    if (color == 'black' || color == 'gray') {
        return grey[300];
    }
    if (color == 'blue') {
        return blue[300];
    }
    if (color == 'brown') {
        return brown[300];
    }
    if (color == 'green') {
        return green[300];
    }
    if (color == 'pink') {
        return pink[300];
    }
    if (color == 'purple') {
        return purple[300];
    }
    if (color == 'yellow') {
        return yellow[300];
    }

    return teal[300];
}