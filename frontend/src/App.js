import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddButton from './components/AddButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route exact path="/" render={() => (
          <div>
            <AddButton />
          </div>
        )} />
      </div>
    );
  }
}

export default App;
