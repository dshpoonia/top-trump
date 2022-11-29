import {INIT_GAME} from "../actions/game-actions";

const initialState = {
    deckSize: 30,
    noOfBotPlayers: 1,
    noOfPlayers: 1,
    initialized: false

};

export default function gameReducer(state=initialState, action) {
    switch (action.type) {
        case INIT_GAME:
            return {
                ...state,
                ...action.payload
            };

        default:
            return {...state};
    }
};
