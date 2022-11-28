import {combineReducers} from "redux";

import homeReducer from "./homeReducer";
import settingsReducer from "./settingsReducer"
import gameReducer from "./gameReducer";
import playerReducer from "./playerReducer";

export const rootReducer = combineReducers({
    home:homeReducer,
    settings:settingsReducer,
    game:gameReducer,
    player:playerReducer
});