import {INIT_PLAYER, LOAD_TRUMP} from "../actions/player-actions";
import {teal} from "@mui/material/colors";

const initialState = {
    noOfPlayers: 1,
    initialized: false,
    playerMap: {
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
    }

};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_PLAYER:
            return action.payload;
        case LOAD_TRUMP:
            let s = { ...state};
            s.playerMap.get(action.payload.p).activeTrump = action.payload.activeTrump;
            return s;

        default:
            return state;
    }
};
