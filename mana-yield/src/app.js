import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/app.css';
import './css/mana.css';

import ManaInput from './components/manaInput.js'

class App extends Component {

  _addNewManaCostToDeck = (manaCost) => {
    console.log(manaCost);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ManaInput ref='primaryManaInput'
                   handleAddClick={this._addNewManaCostToDeck} />
      </div>
    );
  }
}

export default App;
