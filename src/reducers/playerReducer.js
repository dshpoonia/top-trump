import {INIT_PLAYER} from "../actions/player-actions";
import {teal} from "@mui/material/colors";

const initialState = {
    p1: {
        id: "p1",
        name: "Player1",
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
    },
    b1: {
        id: "b1",
        name: "Bot1",
        cards: [],
        activeTrump: {
            attributes: [{name: "", value: ""}],
            isHidden: true,
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
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};
