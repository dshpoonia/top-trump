import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Material UI Imports
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// Component Imports
import AppBar from "./components/AppBar";

// Page Imports
import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";

import PokemonHome from "./components/pokemon/PokemonHome";

class App extends Component {

  render() {
    const theme = createTheme(this.props.settings);

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppBar />
          <Switch>
            <Route exact path={"/"}  component={HomePage} />
            <Route exact path={"/pokemon"} component={PokemonHome} />
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
