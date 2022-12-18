import React, {Component} from "react";
import {connect} from "react-redux";
import InitPlayers from "./InitPlayers";
import {initGame} from "../../actions/game-actions";
import Container from '@mui/material/Container';
import {GameStatus} from "../../reducers/gameReducer";

class InitGameHome extends Component {


    componentDidMount() {
        this.props.initGame({
            deckSize: 20,
            noOfBotPlayers: 1,
            noOfPlayers: 1,
            status: GameStatus.PLAYING,
            mode: this.props.mode

        })
    }

    render() {
        return (
            <Container>
                {this.props.game.status !== GameStatus.NOT_STARTED  && <InitPlayers/>}
            </Container>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {
    initGame
};

export default connect(mapStateToProps, mapDispatchToProps)(InitGameHome);