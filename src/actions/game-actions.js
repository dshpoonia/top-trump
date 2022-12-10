export const INIT_GAME = "INIT_GAME";
export const CHANGE_GAME_STATUS = "CHANGE_GAME_STATUS"

export function initGame(game) {
    return dispatch => {
        dispatch({
            type: INIT_GAME,
            payload: game
        })
    };
}

export function changeGameStatus(gameStatus){
    return dispatch => {
        dispatch({
            type: CHANGE_GAME_STATUS,
            payload: gameStatus
        })
    };
}