import React, { Component } from "react";
import { connect } from "react-redux";

// Action Imports
import { setTest } from "../../actions/home-actions";
import { HomePageSection } from "./HomePageSection";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomePageSection />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

const mapDispatchToProps = {
  setTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
