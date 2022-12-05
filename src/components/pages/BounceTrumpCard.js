import * as React from "react";

import {connect} from "react-redux";
import TrumpCard from "./TrumpCard";
import Zoom from 'react-reveal/Zoom';

const BounceTrumpCard = (props) => {

    return (

        <Zoom>
            <TrumpCard p={props.p}/>
        </Zoom>
    )
};

const mapStateToProps = (state, props) => {
    return {...state, ...props};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BounceTrumpCard);