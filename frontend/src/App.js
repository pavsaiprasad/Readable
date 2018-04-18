import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddButton from './components/AddButton';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import './App.css';
import { Button } from 'react-bootstrap';

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
        <Route exact path="/" render={() => (
          <Posts />
        )} />
        <Route exact path="/add" render={() => (
          <CreatePost />
        )} />
      </div>
    );
  }
}

export default App;
