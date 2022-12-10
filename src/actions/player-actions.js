export const INIT_PLAYER = "INIT_PLAYER";
export const LOAD_TRUMP = "LOAD_TRUMP";
export const PLAY_TRUMP = "PLAY_TRUMP";

export const INIT_LOADING_TRUMP = "INIT_LOADING_TRUMP";
export const FINISH_LOADING_TRUMP = "FINISH_LOADING_TRUMP";
export const HIDE_OTHER_PLAYER_CARDS = "HIDE_OTHER_PLAYER_CARDS";

export function hideOtherPlayerCards(){
    return dispatch => {
        dispatch({
            type: HIDE_OTHER_PLAYER_CARDS,
            payload: {}
        })
    };
}

export function initPlayer(player) {
    return dispatch => {
        dispatch({
            type: INIT_PLAYER,
            payload: player
        })
    };
}

export function loadTrump(trump) {
    return dispatch => {
        dispatch({
            type: LOAD_TRUMP,
            payload: trump
        })
    };
}

export function playTrump(attribute) {
    return dispatch => {
        dispatch({
            type: PLAY_TRUMP,
            payload: attribute
        })
    };
}