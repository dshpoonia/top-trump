import {combineReducers} from "redux";

import homeReducer from "./homeReducer";
import gameReducer from "./gameReducer";
import playerReducer from "./playerReducer";

export const rootReducer = combineReducers({
    home:homeReducer,
    game:gameReducer,
    player:playerReducer
});