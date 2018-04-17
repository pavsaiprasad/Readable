import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavigationBar/>
      </div>
    );
  }
}

export default App;
