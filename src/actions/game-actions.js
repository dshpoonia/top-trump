export const INIT_GAME = "INIT_GAME";

export function initGame(game) {
    return dispatch => {
        dispatch({
            type: INIT_GAME,
            payload: game
        })
    };
}