import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Canvas from './containers/Canvas/Canvas';
import classes from './App.css';



class App extends Component {

    

  render() {
   
    return (
      <div className={classes.App}>
        <Navbar />
        <div className={classes.MainArea}>
        <Switch>
          <Route path="/canvas" component={Canvas} />
          <Route path="/gallery" exact  component={Gallery}/>
          <Redirect from="/" exact to="/canvas" />
        </Switch>
        </div>
      </div>
    );
  }
}



export default App;
