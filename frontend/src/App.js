import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddButton from './components/AddButton';
import Posts from './components/Posts';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    posts: {
      sort: 'voteScore',
      desc: true,
      options: [
        { text: "Vote Score", value: 'voteScore' },
        { text: "Date", value: 'timestamp' }
      ]
    }
  }
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
      </div>
    );
  }
}

export default App;
