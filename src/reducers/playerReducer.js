import {INIT_PLAYER, LOAD_TRUMP, PLAY_TRUMP} from "../actions/player-actions";
import {teal} from "@mui/material/colors";

const initialState = {
    noOfPlayers: 1,
    initialized: false,
    playerTurn: "p1",
    checkTrump: {
        winningPlayer: "p1",
        showOtherPlayerCards: false,
    },
    displayCheckTrumpResult: false,
    playerMap: {
        p1: {
            id: "dummy",
            name: "dummy name",
            cards: [],
            activePokemon: 1,
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
    switch (action.type) {
        case INIT_PLAYER:
            return action.payload;
        case LOAD_TRUMP: {
            let s = {...state};
            s.playerMap.get(action.payload.p).activeTrump = action.payload.activeTrump;
            return s;
        }
        case PLAY_TRUMP: {
            console.log("Play trump action ", action)
            let s = {...state};
            let trumpInitiator = action.payload.pId;
            let attributeNameClicked = action.payload.attributeNameClicked;
            let attributeValueClicked = action.payload.attributeValueClicked;

            let winningPlayerId = trumpInitiator;
            let winningPlayerAttributeValue = attributeValueClicked;
            s.playerMap.forEach((p, pId) => {
                let att = p.activeTrump.attributes.filter((e) => {
                    return e.name == attributeNameClicked
                })[0];
                if (att.value > winningPlayerAttributeValue) {
                    winningPlayerId = pId;
                    winningPlayerAttributeValue = att.value;
                }
            })

            s.checkTrump = {
                winningPlayer: winningPlayerId,
                showOtherPlayerCards: true
            }

            s.displayCheckTrumpResult = true;
            //Take cards from losing players
            s.playerMap.forEach((p, pId) => {
                s.playerMap.get(winningPlayerId).cards.push(p.cards.shift())
                p.activePokemon = p.cards[0];
            })


            return s;
        }
        default:
            return state;
    }
};
