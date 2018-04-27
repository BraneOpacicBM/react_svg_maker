import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route path="/canvas" exact render={() => <h1>Hi canvas!</h1>} />
          <Route path="/gallery" exact render={() => <h1>Hello gallery!</h1>} />
          <Redirect from="/" to="/canvas" />
        </Switch>
      </div>
    );
  }
}

export default App;
