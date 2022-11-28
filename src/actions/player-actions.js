export const INIT_PLAYER = "INIT_PLAYER";

export function initPlayer(player) {
    return dispatch => {
        dispatch({
            type: INIT_PLAYER,
            payload: player
        })
    };
}