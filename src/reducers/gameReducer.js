import {CHANGE_GAME_STATUS, INIT_GAME} from "../actions/game-actions";

export const GameStatus = {
    NOT_STARTED: "NOT_STARTED",
    PLAYING: "PLAYING",
    DISPLAYING_RESULTS: "DISPLAYING_RESULTS",
    PAUSED: "PAUSED"

}

const initialState = {
    deckSize: 30,
    noOfBotPlayers: 1,
    noOfPlayers: 1,
    status: GameStatus.NOT_STARTED

};

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_GAME:
        case CHANGE_GAME_STATUS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return {...state};
    }
};
