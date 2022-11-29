import {INIT_PLAYER} from "../actions/player-actions";
import {teal} from "@mui/material/colors";

const initialState = {
    p1: {
        id: "dummy",
        name: "dummy name",
        cards: [],
        activeTrump: {
            attributes: [{name: "", value: ""}],
            isHidden: false,
            background: teal[300],
            avatarHeader: "",
            header: "",
            subHeader: "",
            image: "",
            cardContent: ""
        }
    }

};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_PLAYER:
            return action.payload;

        default:
            return state;
    }
};
