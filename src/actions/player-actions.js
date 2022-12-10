export const INIT_PLAYER = "INIT_PLAYER";
export const LOAD_TRUMP = "LOAD_TRUMP";
export const PLAY_TRUMP = "PLAY_TRUMP";

export const INIT_LOADING_TRUMP = "INIT_LOADING_TRUMP";

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