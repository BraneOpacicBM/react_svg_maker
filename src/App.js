import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Canvas from './containers/Canvas/Canvas';
import SaveBtn from './components/SaveBtn/SaveBtn';
import classes from './App.css';



class App extends Component {

  componentDidMount() {
    if(!localStorage.getItem('gallery') ) {

      const gallery = [];
      localStorage.setItem('gallery', JSON.stringify(gallery))

    }
    
  }

    

  render() {
   
    return (
      <div className={classes.App}>
        <Navbar />
        <div className={classes.MainArea}>
        <Switch>
          <Route path="/canvas" component={Canvas} />
          <Route path="/gallery" exact  component={Gallery}/>
          <Redirect from="/canvas" exact to="/canvas/line" />
          <Redirect from="/" exact to="/canvas/line" />
        </Switch>
        </div>
        <div>
          <SaveBtn />
        </div>

      </div>
    );
  }
}



export default App;
