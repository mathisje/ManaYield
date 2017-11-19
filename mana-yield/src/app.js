import React, { Component } from 'react';
import './css/app.css';
import './css/mana.css';

import DeckGenerator from './components/deckGenerator.js'

class App extends Component {
  //constructor() {
  //  super();
  //}

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Mana Yield</h1>
        </header>
        <DeckGenerator />
      </div>
    )
  }
}

export default App;
