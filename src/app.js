import React, { Component } from 'react';
import './css/app.css';
import './css/mana.css';

import AboutTheApp from "./components/aboutTheApp";
import DeckGenerator from './components/deckGenerator.js'
import TabContainer from "./components/tabContainer";

class App extends Component {

  _generateTabList = () => {
    let appTab = {
      title: 'Deck List',
      content: (
        <div key={0}>
          <DeckGenerator />
        </div>
      )
    };
    let aboutTab = {
      title: 'About',
      content: (
        <div key={1}>
          <AboutTheApp />
        </div>
      )
    };
    return [appTab, aboutTab];
  };

  render() {
    return (
        <TabContainer containerClass='App'
                      contentContainerClass='content-container'
                      tabRowClass='tab-row-class'
                      headerClass='tab-header'
                      selectedHeaderClass='tab-header-selected'
                      titleClass='tab-title'
                      defaultIndex={0}
                      emptySpaceRight={(<div className='empty-tab' />)}
                      tabList={this._generateTabList} />
    )
  }
}

export default App;
