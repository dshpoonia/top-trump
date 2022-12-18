import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";

import InitGameHome from "./components/pages/InitGameHome";
import {theme} from "./theme";
import PokemonGameHome from "./components/pokemon/PokemonGameHome";

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            
            <Route exact path={"/"}  component={HomePage} />
            <Route exact path={"/pokemon"} component={PokemonGameHome} />
            <Route exact path={"/cricket"} component={InitGameHome} />
            <Route exact /*strict*/ component={NoPageFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
