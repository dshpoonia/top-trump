import {
    INIT_LOADING_TRUMP,
    INIT_PLAYER,
    LOAD_TRUMP,
    PLAY_TRUMP
} from "../actions/player-actions";
import {teal} from "@mui/material/colors";

const initialState = {
    noOfPlayers: 1,
    initialized: false,
    playerTurn: "p1",
    checkTrump: {
        winningPlayer: "p1",
    },
    playerMap: {
        p1: {
            id: "dummy",
            name: "dummy name",
            cards: [],
            trumpLoaded: false,
            activeTrump: {
                attributes: [{name: "", value: ""}],
                isHidden: false,
                background: teal[300],
                avatarHeader: "",
                header: "",
                subHeader: "",
                image: "",
                cardContent: ""
            }
        }
    }

};

export default function playerReducer(state = initialState, action) {
    console.log("Reducer", action)
    switch (action.type) {
        case INIT_PLAYER:
            return action.payload;
        case LOAD_TRUMP: {
            let s = {...state};
            s.playerMap.get(action.payload.p).activeTrump = action.payload.activeTrump;
            s.playerMap.get(action.payload.p).trumpLoaded = true;
            return s;
        }
        case INIT_LOADING_TRUMP: {
            let s = {...state};
            s.playerMap.get(action.payload.id).trumpLoaded = action.payload.trumpLoaded;
            return s;
        }

        case PLAY_TRUMP: {

            let s = {...state};
            let trumpInitiator = action.payload.pId;
            let attributeNameClicked = action.payload.attributeNameClicked;
            let attributeValueClicked = action.payload.attributeValueClicked;

            let winningPlayerId = trumpInitiator;
            let winningPlayerAttributeValue = attributeValueClicked;
            s.playerMap.forEach((p, pId) => {
                let att = p.activeTrump.attributes.filter((e) => {
                    return e.name === attributeNameClicked
                })[0];
                if (att.value > winningPlayerAttributeValue) {
                    winningPlayerId = pId;
                    winningPlayerAttributeValue = att.value;
                }
            })

            s.checkTrump = {
                winningPlayer: winningPlayerId,
            }

            //Take cards from losing players
            s.playerMap.forEach((p, pId) => {
                s.playerMap.get(winningPlayerId).cards.push(p.cards.shift())
            })


            return s;
        }
        default:
            return state;
    }
};
