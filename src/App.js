import React, { Component } from 'react';
import './App.css';
import Home from './home.jsx';
import Nav from './nav';
import MyGallery from './myGallery';
import Todos from './Todos.jsx'

import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockIsOn: true,
    };
  }

 
  render() {
    return (
      <Router>
      <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component ={Home}/>
      <Route path="/drawings" component ={MyGallery}/>
      <Route path="/todos" component ={Todos}/>
      </Switch>
    </div>
    </Router>
    );
  }
}


export default App;
