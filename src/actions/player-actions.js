export const INIT_PLAYER = "INIT_PLAYER";
export const LOAD_TRUMP = "LOAD_TRUMP";

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