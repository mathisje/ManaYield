import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/app.css';
import './css/mana.css';

import ManaCost from './components/manaCost.js';
import TextInput from './components/textInput.js'

class App extends Component {
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
        <ManaCost costArray={['11','w','r','r','r']} />
        <TextInput />
      </div>
    );
  }
}

export default App;
